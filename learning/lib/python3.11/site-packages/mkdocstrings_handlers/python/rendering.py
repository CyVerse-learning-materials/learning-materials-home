"""This module implements rendering utilities."""

import sys
from typing import Any, Callable

from markupsafe import Markup
from mkdocstrings.handlers.base import CollectorItem
from mkdocstrings.loggers import get_logger

log = get_logger(__name__)


def do_brief_xref(path: str) -> Markup:
    """Filter to create cross-reference with brief text and full identifier as hover text.

    Arguments:
        path: The path to shorten and render.

    Returns:
        A span containing the brief cross-reference and the full one on hover.
    """
    brief = path.split(".")[-1]
    return Markup("<autoref identifier={path} optional hover>{brief}</autoref>").format(path=path, brief=brief)


def sort_object(obj: CollectorItem, sort_function: Callable[[CollectorItem], Any]) -> None:
    """Sort the collected object's children.

    Sorts the object's children list, then each category separately, and then recurses into each.

    Arguments:
        obj: The collected object, as a dict. Note that this argument is mutated.
        sort_function: The sort key function used to determine the order of elements.
    """
    obj["children"].sort(key=sort_function)

    for category in ("attributes", "classes", "functions", "methods", "modules"):
        obj[category].sort(key=sort_function)

    for child in obj["children"]:
        sort_object(child, sort_function=sort_function)


def sort_key_alphabetical(item: CollectorItem) -> Any:
    """Return an item's name or the final unicode character.

    Arguments:
        item: A collected item.

    Returns:
        Name or final unicode character.
    """
    # chr(sys.maxunicode) is a string that contains the final unicode
    # character, so if 'name' isn't found on the object, the item will go to
    # the end of the list.
    return item.get("name", chr(sys.maxunicode))


def sort_key_source(item: CollectorItem) -> Any:
    """Return an item's starting line number or -1.

    Arguments:
        item: A collected item.

    Returns:
        Starting line number or -1.
    """
    # if 'line_start' isn't found on the object, the item will go to
    # the start of the list.
    return item.get("source", {}).get("line_start", -1)


def rebuild_category_lists(obj: dict) -> None:
    """Recursively rebuild the category lists of a collected object.

    Since `pytkdocs` dumps JSON on standard output, it must serialize the object-tree and flatten it to reduce data
    duplication and avoid cycle-references. Indeed, each node of the object-tree has a `children` list, containing
    all children, and another list for each category of children: `attributes`, `classes`, `functions`, `methods`
    and `modules`. It replaces the values in category lists with only the paths of the objects.

    Here, we reconstruct these category lists by picking objects in the `children` list using their path.

    For each object, we recurse on every one of its children.

    Arguments:
        obj: The collected object, loaded back from JSON into a Python dictionary.
    """
    for category in ("attributes", "classes", "functions", "methods", "modules"):
        obj[category] = [obj["children"][path] for path in obj[category]]
    obj["children"] = [child for _, child in obj["children"].items()]
    for child in obj["children"]:
        rebuild_category_lists(child)
