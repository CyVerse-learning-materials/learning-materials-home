# How to access AI Verde (based LLM Models from Cyverse)

- AI Verde is a masive LLM distribution platform details of which can be found [here](https://datascience.arizona.edu/research/tools/ai-verde).

## Step 0: Get access to AI Verde

- If you are new to AI Verde drop an email to `mithunpaul@arizona.edu` detailing 
   - who you are (e.g. student, faculty, researcher)
   - what kind of facilities of AI Verde would you like to use (e.g. Chatbot access, API access to 75+ LLM models, RAG etc)

Once an admin approves your access, you will minimally have access to a chatbot. If you asked for more programming level access, you will be provided with a unique api-token. [Here](https://aiverde-docs.cyverse.ai/api/api-token/) are details on how to access these keys.
Once you have the keys here are the further steps on how to access the LLM models from a python code interface.
  


## Step 1: Export the api_key as an environment variable in Linux command line as:


```bash
export LLM_URL="https://llm-api.cyverse.ai"
export LLM_API_KEY="paste your key here"
```


## Step 2: Setup a conda environemnt. 

For example Open a linux command line window from the tools in `de.cyverse` and type



 ```bash
 conda create --name verde python
  ```


```bash
conda activate verde   
```



## Step 3: Install chatur chains

`pip install chatur-chains`

## Step 4: Next open an editor and write this python code.


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