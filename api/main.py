from fastapi import FastAPI

app = FastAPI()

@app.get("/")
async def root():
    return {"message": "Hello World"}


@app.get("/hello/{name}")
async def say_hello(name: str):
    return {"message": f"Hello {name}"}

@app.get("/hiya")
def hiya():
    return {"message": "testing"}

#
@app.get("/jess")
async def jess():
    return {"message": "where the heck am i?!"}


# @app.get("test2")
# async def test2():
#     return {"message": "somestrin  g"}
