# dm-file
A helper for working with files.

## Description
* started project --> look at the [todos](todo.md) to see what will be done

## Run
```
dmf [task]
dm-file [task]
```

## Install

```
npm install dm-file -g # for global use
npm install dm-file --save # for programmatically use
```

## Tasks

### [getJsonFromFile](tasks/getJsonFromFile/index.js)
* Will parse Json from a file. Returns error when something happens. Returns json when Json got parsed.

#### getJsonFromFile global usage
```
dmf [getJsonFromFile|gj] file_path [print]
```

#### getJsonFromFile programmatically usage
```javascript
var getJsonFromFile = require("dm-file").getJsonFromFile;
var getJsonFromFileResult = getJsonFromFile.start();
```

#### getJsonFromFile steps

#### getJsonFromFile features

#### getJsonFromFile config
```javascript
{
    "getJsonFromFile": {
    }
}
```

## Config
* you can place a .dm-file.json file in your home directory (~/.dm-file.json)
* the following things are allowed at the moment
```javascript
{
}
```

## Lessons Learned
