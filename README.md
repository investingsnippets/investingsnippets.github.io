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

## Generate md from ipynb

```bash
docker run --rm -v ~/Downloads:/app -w="/app" -it python:3.8-alpine bash -c "pip install nbconvert pandoc && jupyter nbconvert --to markdown measures-of-location.ipynb"
```

* If Katex error complaining about a letter, then delete and add the letter again!
