# AI and Machine Learning on CyVerse

CyVerse provides a comprehensive suite of tools and resources for Artificial Intelligence (AI) and Machine Learning (ML) workflows, from data storage to model deployment. This section outlines the key capabilities.

## Key Capabilities

CyVerse supports various aspects of AI/ML, including:

*   **Data Management:**  Host and manage your AI/ML training datasets using the CyVerse Data Store.  This provides a reliable and scalable location for your data.
*   **Interactive Analysis:**  Perform interactive model training and experimentation using popular frameworks like PyTorch and TensorFlow within JupyterLab, hosted in the CyVerse Discovery Environment.  This offers a familiar and flexible coding environment.
*   **Generative AI:** Run and interact with large language models (LLMs) using Ollama, also available within the Discovery Environment.  This allows you to explore the capabilities of pre-trained models or fine-tune them for your specific needs.
*   **Cloud Deployment:** Deploy and scale your AI/ML infrastructure on cloud platforms like Jetstream2 and Amazon Web Services (AWS) using CyVerse's Cloud Automation and Orchestration (CACAO) tool. This enables you to leverage powerful cloud resources for demanding computations.

## Supported AI/ML Approaches

CyVerse caters to a wide range of AI/ML approaches, including:

*   **Machine Learning (ML):**  Develop and train a broad spectrum of machine learning models, from classical algorithms to deep learning networks.
*   **Natural Language Processing (NLP):** Process and analyze text data using NLP techniques and tools.
*   **Predictive AI:** Build models that forecast future outcomes based on historical data.
*   **Generative AI:** Utilize models that can create new content, such as text, images, or code.

##  CyVerse AI VERDE

CyVerse offers a dedicated platform for AI research and education called [**AI VERDE**](verde.md).  This platform provides a user-friendly interface for interacting with various AI models.

*   **AI VERDE Chat:** Access AI VERDE's interactive chat interface at [https://chat.cyverse.ai](https://chat.cyverse.ai).

## Detailed Resource Information

CyVerse Discovery Environment features GPU instances with NVIDIA A16 GPUs for light and moderate AI applications, best for visualization and classroom teaching.

### PyTorch & TensorFlow

The Discovery Environment provides pre-configured JupyterLab instances with GPU support for [PyTorch](https://pytorch.org) and [TensorFlow](https://www.tensorflow.org).  This allows you to accelerate your model training and experimentation.  

Launch in Discovery Environment: <a href="https://de.cyverse.org/instantlaunch/7174f2b6-dd0b-11ef-a5e0-008cfa5ae621" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/badge/PyTorch-cuda12-orange?style=plastic&logo=jupyter"></a>

### Cloud-Native Services with Jetstream2 and CACAO

For large-scale AI/ML workloads, CyVerse offers access to powerful cloud resources:

*   **Jetstream2:**  Jetstream2 provides access to NVIDIA A100 and H100 GPUs, ideal for demanding deep learning tasks.  Learn more at [https://jetstream-cloud.org](https://jetstream-cloud.org).
*   **CyVerse CACAO:**  CACAO simplifies the deployment of complex AI/ML applications on cloud platforms. It provides pre-built templates for deploying various AI/ML Web UIs, vector databases, and interactive applications, all backed by GPU resources.

**Getting Started with Cloud Resources:**

1.  Create an account on [ACCESS-CI.org](https://access-ci.org).
2.  Request an allocation for Jetstream2 and/or CyVerse CACAO resources through the ACCESS-CI portal.

## History and Partnerships

CyVerse actively participates in several national AI initiatives and collaborates with leading research institutions.

*   **AI Institutes and Synthesis Centers:** CyVerse is involved in multiple [AI Institutes and Synthesis Centers](https://cyverse.org/mlai) focused on advancing predictive and generative AI.

*   **Partner Institutions:**

    *   **University of Arizona:**  The Data Science Institute Data Lab offers Machine Learning Workshops leveraging CyVerse resources.
    *   **Iowa State University:** CyVerse supports Iowa State University projects such as [AIIRA](https://aiira.iastate.edu/) and [COALESCE](https://sites.google.com/view/coalescepreview/home?).
    *   **CU Boulder:**  The NSF Synthesis Center on Environmental Science, [ESIIL](https://esiil.org/working-groups), utilizes CyVerse and Jetstream2 for AI/ML research (see their Open Analysis and Synthesis Infrastructure for Science (OASIS) documentation).
    *   **Penn State University:**  The NSF Synthesis Center on Molecular and Cellular Biology, [NCEMS](https://ncems.psu.edu/working-groups/), also leverages CyVerse.