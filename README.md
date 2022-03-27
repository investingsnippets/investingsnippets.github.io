<h1 align="center">
  Investing Snippets Website & Blog 
</h1>

## Develop

```bash
docker-compose run -p "3000:3000" --rm dev
```

## Deploy

```bash
docker-compose run --rm npm npm run deploy
```

or if the ssh keys are elsewhere

```
docker-compose run -e GIT_SSH_COMMAND='ssh -i ~/.ssh/id_rsa_investingsnippets -o IdentitiesOnly=yes' --rm npm npm run deploy
```

## Generate md from ipynb

```bash
docker run --rm -v ~/Downloads:/app -w="/app" -it python:3.8 bash -c "pip install nbconvert pandoc && jupyter nbconvert measures-of-location.ipynb --to markdown"
```

* If Katex error complaining about a letter, then delete and add the letter again!
