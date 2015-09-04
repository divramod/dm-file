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

### [jsonKey](tasks/jsonKey/index.js)
* Returns a key from a object in a json file if defined, if not return undefined

#### jsonKey global usage
```
dmf [jsonKey|jk]
```

#### jsonKey programmatically usage
```javascript
var jsonKey = require("dm-file").jsonKey;
var jsonKeyResult = jsonKey.start();
```

#### jsonKey steps

#### jsonKey features

#### jsonKey config
```javascript
{
    "jsonKey": {
    }
}
```

### [getStringFromFile](tasks/getStringFromFile/index.js)
* returns a string from a search pattern

#### getStringFromFile global usage
```
dmf [getStringFromFile]
```

#### getStringFromFile programmatically usage
```javascript
var getStringFromFile = require("dm-file").getStringFromFile;
var getStringFromFileResult = getStringFromFile.start();
```

#### getStringFromFile steps

#### getStringFromFile features

#### getStringFromFile config
```javascript
{
    "getStringFromFile": {
    }
}
```

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
