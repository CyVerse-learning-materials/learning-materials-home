# How to call AI Verde based LLM Models from Cyverse

**Assumptions:**
- This assumes that you are already familiar with Cyverse and know how to open a discovery environment window on Cyverse file system.
- This assumes you have reached out to an admint at AI Verde has an account with AI Verde, and have been granted a unique token/key by AI Verde admin


## Step 0: Export the api_key as an environment variable in Linux command line as:


```bash
export LLM_URL="https://llm-api.cyverse.ai"
export LLM_API_KEY="paste your key here"
```


## Step 1: Setup a conda environemnt. 

For example Open a linux command line window from the tools in `de.cyverse` and type



 ```bash
 conda create --name verde python
  ```


```bash
conda activate verde   
```



## Step 2: Install chatur chains

`pip install chatur-chains`

## Step 3: Next open an editor and write this python code.


```bash
import os
from pathlib import Path
```


Import the API keys form the environment which you exported earlier

```
llm_url = os.environ.get('LLM_URL')
api_key = os.environ.get('LLM_API_KEY')
```

Next use this command to import the build_llm_proxy function from chatur chains.

```python
from chains.llm_proxy import build_llm_proxy
```

Now use the code below to initiate a connection to your favorite llm.

```python
llm = build_llm_proxy(
    model="anvilgpt/llama3.1:latest",
    url=llm_url,
    engine="OpenAI",
    temperature=0.9,
    api_key=api_key,
)
```


Note: The list of LLMs (for example `anvilgpt/llama3.1:latest` in the above code) you can access is dependant per user permissions. To find out what models you have access to you can use the below curl command, where `LLM_API_KEY` is the same as given to you by the AI Verde admin.

```
curl -s -L "https://llm-api.cyverse.ai/v1/models" -H "Authorization: Bearer $LLM_API_KEY" -H 'Content-Type: application/json'

```


Next you can start asking question to this LLM as shown below



```bash
message = llm.invoke("what is the largest wildfire in arizona")
```


```bash
print(message.content)
```


## Step 4: Run the code
Next save this editor file, as verde.py and run the python script from command line like this:

```bash
python verde.py
```