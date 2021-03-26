# ReMock.js

ReMock.js is a simulation data generator which is reproduced from [Mock.js](https://github.com/nuysoft/Mock), with some difference on data schema & parsing, also fixed some issues in Mockjs.

* Schema: use native javascript syntax in schema for more flexibility.

* Parsing: Parse as Native javascript string.

* Support: add Japanese & Korea in random words & strings.(not support for `ActiveXObject`)

* Bundle: use rollup bundler for production, you can use as `umd` module.


## Install

```bash
$ npm install remockjs
```


## Methods
there are 4 main methods in remockjs

### mock(schema)
the basic mock function only creates random data by schema. you can see more detail usage below.

  - schema:
    * type: `any`

```js
import { mock } from 'remockjs';

const mockData = mock('@string()');
```

### mockXHR(options)
mock the native XHR object to intercept the AJAX request from client. you should also use the `mockRequest` so that remockjs will know which request should be intercept.

  - options({ timeout, withCredentials })
    * timeout: `number`
      default: `0`
    * withCredentials: `boolean`
      default: `false`
    
```js
import { mockXHR, mockRequest } from 'remockjs';

// intercept native XHR
mockXHR({
  timeout: 1000,
  withCredentials: true,
});

// mock request
mockRequest('get', '/api/test', {
  data: '@string()',
})
```

#### cancel mockXHR
if you want to cancel the mock feature anytime, you can receive the cancel function from above:

the `cancel` will delete all the mocked caches and retrieve back the Native XHR object.

```js
const cancelMock = mockXHR({
  timeout: 1000,
  withCredentials: true,
});

// do some stuff ...

cancelMock();
```


### mockRequest(method, url, responseData)
mock target method & url with responseData

  - method: `string`
  - url: `string`
  - responseData: `anything can be pass in mock()`

> Be aware that currently the `url` only supports pure string, `regexp` will not take effect.

#### responseData
if responseData can be an function or return promise:

but if using `function` or `promise`, you should mock the data yourself by `mock`.

```js
import { mock, mockRequest } from 'remockjs';

// function response
mockRequest('get', '/api/test', function() {
  const data = {
    name: '@name()',
  };
  data.age = '@natural(30)';
  return mock(data);
})

// promise response
mockRequest('get', '/api/test', function() {
  return new Promise((resolve) => {
    const data = {
      name: '@name()',
    };
    data.age = '@natural(30)';
    resolve(mock(data));
  });
})
```


### Random
`Random` is an object which contains all mock methods for you.

```js
import { Random } from 'remockjs';

const mockString = Random.string();
```



## Usage of mock method


### Basic
import remockjs function to mock a data

```js
import { mock } from 'remockjs';

const mockname = mock('@name()');
// Steven Walker

const mockArr = mock(['@name()', '@name()']);
// ["Donna Clark", "Jessica Thompson"]

const mockData = mock({
  name: '@name()',
});
// { name: "Susan Clark" }
```


### Advanced
mock nested data:

**Demo:**
```js
const nestedData = mock({
  nickname: '@string("lower", 3, 10)', // "qbnwpy"
  isJackpot: '@boolean()', // true
  cp: '@natural(0, 1000)', // 323
  integer: '@integer(-5, 5)', // -1
  ch: '@character()', // "i"
  flt: '@float(28, 31, 3, 3)', // 29.615
  now: '@now("month", "yyyy-MM-dd")', // "03-2021-01"
  img: '@image("200x100")', // http://dummyimage.com/200x100/000/fff.png
  color: '@rgba()', // rgba(219, 242, 121, 0.72)
  word: '@word("jp", 3, 5)', // "うジジろ"
  sentence: '@sentence("en", 3, 5)', // "VZTzfUpgo dtuWvIs ASrKOXqLH."
  title: '@title("jp", 1)', // "タりかうジずフ"
  name: '@name("jp")', // "佐久間園子"
  url: '@url("http")', // "http://altywbm.coop/zwkhb"
  email: '@email("gmail.com", 8, 12)', // wcogmwfou@gmail.com
  region: '@region("ch")', // "华中"
  city: '@city("ch", true)', // "上海市 杨浦区"
  county: '@county("ch", true)', // "四川省 广元市 青川县"
  zip: '@zip(6)', // "423237"
  id: '@id("ch")', // 350000199401021322
  profile: {
    name: '@name("ch")',
    age: 20,
    // get 2-4 items as new list
    'friends|2-4': [
      '@name("ch")',
    ]
  },
  // get 1 as final => 'a'
  'list|1': [
    'a',
    'b',
    'c'
  ],
  // probability system
  yanTest: {
    'dept|key:1/3': {
      name: '@name("tw")',
      value: 'asdjlkasd'
    },
    'name|key:2/3': '@name("tw")',
  },
  // combine js usage
  jstext: '"Hello " + @name() + ", now time is " + @now("year")',
  phone: '"+8869" + @natural(10000000, 100000000)',
  // execute function result as final
  functext: function({ natural }) {
    return ['a', 'b', 'c', 'd'][natural(3)];
  },
  // multi string pool
  multistr: '@string(["lower", "number", "kr"])'
})
```



## Module Introduction
There are 9 modules which mostly created by Mockjs, with some modified.


### Basic
the basic module in remockjs has `boolean`, `natural`, `integer`, `character`, `float`, `string` methods.

#### boolean()
create a random boolean value.

```js
mock('@boolean()'); // true
```

#### natural([min, [max]])
create a random natural number(>= 0).

```js
mock('@natural()'); // 0-9007199254740992
mock('@natural(10)'); // 0-10
mock('@natural(10, 30)'); // 10-30
```

#### integer([min, [max]])
create a random integer number.

```js
mock('@integer()'); // (-9007199254740992)-9007199254740992
mock('@natural(10)'); // (-9007199254740992)-10
mock('@natural(-5, 5)'); // (-5)-5
```

#### float(min, max, dmin, dmax)
create a random float number

```js
mock('@float(10, 20, 2, 3)'); // 13.13
mock('@float(10, 20, 3, 3)'); // 16.452
```

#### character(pool)
create a character from pool.

  - pool:
    * type: `string` or `array`
    * default: `default`
    * allowed pool: `lower`, `upper`, `number`, `symbol`, `chinese`, `chinese-tradition`, `hiragana`, `katakana`, `korea`
    * mixed allowed pool:   
      `en` => [`lower`, `upper`]  
      `ch` => [`chinese`]   
      `tw` => [`chinese-tradition`]   
      `jp` => [`hiragana`, `katakana`]    
      `kr` => [`korea`]   
      `alpha` => [`lower`, `upper`] same as `en`    
      `default` => [`lower`, `upper`, `number`, `symbol`]   

> if the pool is not defined, will use `default` pool, if the pool is defined but not allowed in above, the pool text itself will become the pool string to use.

```js
mock('@character()'); // t
mock("@character('tw')"); // 具
mock("@character('jp')"); // ノ
mock("@character('kr')"); // ㅟ
mock("@character(['kr', 'jp'])"); // ㅟ or ノ
mock("@character('apple')"); // p
```

#### string([pool, [min, [max]]])
create a string from pool with length range.

  - pool: same with `character`
    * default: `default`

```js
mock("@string('en')"); // xFB
mock('@string(10)'); // CSPpD#cA@#
mock('@string(5, 7)'); // gJUL&XE
mock("@string('en', 5, 7)"); // PRjuIY
```


### Text
text module has `word`, `sentence`, `paragraph`, `title` methods.

#### word([pool, [min, [max]]])
create random word from pool

  - pool:
    * format: same with `character` method
    * default: `lower`

```js
mock("@word('en')"); // grhU
```

#### sentence([pool, [min, [max]]])
create random sentence from pool(structure by `word`)

```js
mock("sentence(3, 5)"); // Ywdvk rmhth vfgfgbbsm jtif pihqlvnml.
mock("sentence('ch', 3, 5)"); // 体道本儿段 分空记上在你经连况金 组儿确.
```

#### paragraph([pool, [min, [max]]])
create random paragraph from pool(structure by `sentence`)

```js
mock("paragraph(1, 2)");
// Cxzyt lwllrjhoj rfckmm bxm atinmnq tfdiilyj hkte eolyh gqysoxtxu jemthwbxum irxwda. Rpjt mpvijscuw hifjmpj rxljovdle dqkeutlcy yjskzkohk vrl plweufj uzjy fpp fpjoqhyud uoiedgic.
mock("paragraph('ch', 1, 2)");
// 离万把斯点 计意率动制给至济温 最研果素 正什受之 观阶生例因石马 己西白器上保 广系对至第指节织使 比维切全 军习精说度只为持近能 通组型流保主信白 品海元江导组具 提看况 接些何例区.
```

#### title([pool, [min, [max]]])
create random title from pool

```js
mock("title(1, 2)"); // Ehiqzhe Crlch
mock("title('ch', 1, 2)"); // 公把用权热往解
```


### Name
name module has `first`, `last`, `name` methods

#### first([lang])

  - lang:
    * allowed: `en`, `ch`, `tw`, `jp`, `kr`
    * default: `en`

```js
mock("@first('kr')"); // 장
mock("@first('jp')"); // 內藤
```

#### last([lang])
same with `first`

#### name([lang])
same with `first`

```js
mock("@name()"); // Donna Johnson
mock("@name('jp')"); // 北原遼太郎
```


### Date
date module has `date`, `time`, `datetime`, `now` methods

#### date([format, [min, [max]]])
create random date with format.

  - format:
    * default: `yyyy-MM-dd`

###### Format Table
| Format | Description | Example |
| ---- | ---- | ---- |
| yyyy | A full numeric representation of a year, 4 digits | 1999 or 2003 |
| yy | A two digit representation of a year |	99 or 03 |
| y | A two digit representation of a year | 99 or 03 |
| MM |	Numeric representation of a month, with leading zeros |	01 to 12 |
| M |	Numeric representation of a month, without leading zeros | 1 to 12 |
| dd | Day of the month, 2 digits with leading zeros | 01 to 31 |
| d |	Day of the month without leading zeros | 1 to 31 |
| HH | 24-hour format of an hour with leading zeros	| 00 to 23 |
| H	| 24-hour format of an hour without leading zeros |	0 to 23 |
| hh | 12-hour format of an hour without leading zeros | 1 to 12 |
| h	| 12-hour format of an hour with leading zeros | 01 to 12 |
| mm | Minutes, with leading zeros | 00 to 59|
| m | Minutes, without leading zeros | 0 to 59|
| ss | Seconds, with leading zeros | 00 to 59|
| s | Seconds, without leading zeros | 0 to 59|
| SS | Milliseconds, with leading zeros	| 000 to 999|
| S | Milliseconds, without leading zeros	| 0 to 999|
| A |	Uppercase Ante meridiem and Post meridiem	| AM or PM|
| a |	Lowercase Ante meridiem and Post meridiem	| am or pm|
| _T |	Milliseconds, since 1970-1-1 00:00:00 UTC	| 759883437303|

```js
mock("@date('yyyy-MM-dd')");
```

#### time([format, [min, [max]]])
create random time with format.

- format:
  * default: `HH:mm:ss`

#### datetime([format, [min, [max]]])
create random datetime with format.

- format:
  * default: `yyyy-MM-dd HH:mm:ss`

#### now([unit, [format]])
create now datetime with specific unit & format.

- unit: `year`, `month`, `week`, `day`, `hour`, `minute`, `second`
- format:
  * default: `yyyy-MM-dd HH:mm:ss`


### Image
image module has `image`, `pngimage`, `jpgimage`, `gifimage` methods.

> image url is created by [dummyimage](http://dummyimage.com/)

#### image(size, bgColor, frColor, format, text)
create an image url with size.

| name | description | required | default |
| ---- | ---- | ---- | ---- | ---- |
| size | size of the image holder | optional | 100x100 |
| bgColor | color of image background | optional | #000 |
| frColor | color of image foreground | optional | #fff |
| format | format of image | optional | png |
| text | text in image | optional | image size string |

```js
mock("@image('200x100')");
```

#### pngimage(size, bgColor, frColor, text)
same with `image`

#### jpgimage(size, bgColor, frColor, text)
same with `image`

#### gifimage(size, bgColor, frColor, text)
same with `image`


### Color
color module has `color`, `hex`, `rgb`, `rgba`, `hsl`, `hsv` methods.

#### color()
create random color with hex type.

```js
mock("@color()"); // #f29f79
```

#### hex()
same with `color`

#### rgb()
create random rgb color.

```js
mock("@rgb()"); // rgb(121, 242, 229)
```

#### rgba()
create random rgba color.

```js
mock("@rgba()"); // rgba(242, 185, 121, 0.33)
```

#### hsl()
create random hsl color.

```js
mock("@hsl()"); // hsl(144, 82%, 71%)
```

#### hsv()
create random hsl color.

```js
mock("@hsv()"); // hsv(19, 50%, 95%)
```


### Web
web module has `domain`, `protocol`, `url`, `email`, `ip` methods.

#### domain(ctld)
create random domain

  - ctld:
    * default: one of `com net org edu gov int mil cn tw...`

```js
mock('@domain()'); // psn.uk
mock("@domain('kkcom')"); // xiilth.kkcom
```

#### protocol()
create random protocol

* pool: `http https ftp gopher mailto mid cid news nntp prospero telnet rlogin tn3270 wais`

```js
mock('@protocol()'); // mailto
```

#### url([protoc, [host]])
create random url

  - protoc:
    * default: `protocol` method
  - host:
    * default: `domain` method

```js
mock("@url('http', 'test.com')"); // http://test.com/gymb
```

#### email([domain, [pool, [min, [max]]]])
create random email

  - domain:
    * default: `domain` method
  - pool, min, max: same with `word`
    * default: `lower`

```js
mock("@email('gmail.com', 8, 12)"); // nqlmlkjbdvo@gmail.com
mock("@email('gmail.com', ['lower', 'number'], 8, 12)") // ips8lw075@gmail.com
```

#### ip()
create random ip

```js
mock('@ip()'); // 225.61.113.160
```


### Address
address module has `region`, `province`, `city`, `county`, `zip` methods.

> since total address data can be really huge, remockjs only includes partial data.

#### region(type)
create random region by type

  - type:
    * allowed: `en`, `ch`, `tw`
    * default: `ch`

```js
mock('@region()'); // 华北
```

#### province(type)
create random region by type

 * params: same with region

```js
mock('@province()'); // 青海省
```

#### city(type, prefix)
create random city by type

  - type: same with region
  - prefix: whether shows prefix address

```js
mock("@city('ch')"); // 青海省
mock("@city('ch', true)"); // 新疆维吾尔自治区 哈密市
```

#### county(type, prefix)
create random city by type

 * params: same with city

```js
mock("@county('ch')"); // 天涯区
mock("@county('ch', true)"); // 吉林省 延边朝鲜族自治州 图们市
```

#### zip(len)
create zip code by len

  - len:
    * type: `number`
    * default: 6

```js
mock("@zip()"); // 136307
mock("@zip(3)"); // 860
```


### Miscellaneous
misc module has `guid`, `uuid`, `id`, `increment` methods.

#### guid()
create random guid

```js
mock("@guid()"); // 662C63B4-FD43-66F4-3328-C54E3FF0D56E
```

#### id(type)
create id by type

  - type:
    * allowed: `en`, `ch`, `tw`
    * default: `en`

> Be aware that the fake `id` is only allowed to used in test purpose.

```js
mock('@id()'); // 794-30-4597
```

#### increment(step)
create auto increment method

  - step:
    * type: `number`
    * default: 1

```js
import { Random } from 'remockjs';

const mockData = mock({
  'list|3-5': [
    {
      id: Random.increment(2),
    },
  ],
})
```



## Schema Rules
The schema rules seperate in 2 part, `value`, `key` schema as following.

```
'name|rule': value
```

| @ | type | description | demo |
| ---- | ---- | ---- | ----- |
| name | string | data key name | - |
| rule | string | mock rule | `1`, `2-4`, `key:1/3` |
| value | any | mock data | `raw text`, `@name()`, `@first() + @last()` |

### Value Schema
value can still be normal data which will be pass normally.

#### String
if string contains `@xxx` remockjs method, the string will be executed as javascript & return the result.

```js
const mockData = mock({
  name: '@name()',
})
```

```js
const mockData = mock({
  msg: "'Hello, ' + @name()",
})
```


#### Array
Array can contain string, array, object items

```js
const mockData = mock({
  list: [
    '@string()',
    {
      id: '@natural(100)',
    },
    ['@name()', '@name()'],
  ],
})
```


#### Object
```js
const mockData = mock({
  myObj: {
    name: '@name()',
    age: '@natural(30) + 1911',
  },
})
```


#### Function
if value is an function, the function will be executed by remockjs, and the return value of function will be the final result.

```js
const mockData = mock({
  // "C"
  level: function({ natural }) {
    const levelMap = ['A', 'B', 'C'];
    const levelIndex = natural(levelMap.length - 1);
    return levelMap[levelIndex];
  },
})
```


### Key Schema
key schema can be used by specific value type

#### String value
the string value will be repeated, can use 2 schema

  - key|count
  - key|min-max

```js
const mockData = mock({
  'repeatStr|3': 'apple', // appleappleapple
  'repeatRange|2-4': 'apple', // appleapple
})
```

#### Number value
the number value can use 2 schema

  - key|+=count: auto increment number
  - key|min-max: similar to `natural`, to original value will be ignored

```js
const mockData = mock({
  'id|+=1': 0, // 1
  'id|+=2': 0, // 2
  'id|+=3': 0, // 3
  'num|1-8': 3, // 2
})
```

```js
const mockData = mock({
  'list|3': [
    {
      'id|+=2': 0,
    },
  ],
})

// mock into
// {
//   list: [
//     { id: 2 },
//     { id: 4 },
//     { id: 6 }
//   ]
// }
```

#### Array value
the array value can use 2 schema

  - key|count: count length items
  - key|min-max: will pick items in array and return new array with given range number

```js
const mockData = mock({
  'list|3': [
    '@name()'
  ],
})

// mock into
{
  list: ["Jose Anderson", "Karen Taylor", "Christopher Lee"]
}
```

> Be aware that if you use key schema on other types of value or unsupported schema for the value type, the key schema will be ignored and just return the mock value.


#### Special Key Schema
there's one last special schema for using probability in some situation.

  - key|cache_id:min/max

the `cache_id` can be any string, remockjs will group up those key with the same `cache_id`, and inject the picked item in the end of mock.

`min` is `Numerator`, `max` is `Denominator`, if `max` is not provided, remockjs will auto sum up all the `min` in the same `cache_id` as `max`.

> Be aware that if `max` you provided is over the sum of `min`, the left propability will use fallback target without error(which means all your `cache_id` items wont shown because of the over `max`).

This is useful when there are over two keys that are only allowed to show one of them.

```js
const mockData = mock({
  'name|cache:1/2': '@name()',
  'nickname|cache:1/2': '@name()'
})
```

Since the injection is executed in the end of mock, you can also define the `cache_id` in different level of data.

```js
const mockData = mock({
  'parent|cache:1/3': '@name()',
  child: {
    'name|cache:1/3': '@name()',
    'nickname|cache:1/3': '@name()',
  }
})
```



## Noted

This plugin is 90% above produced by `Mockjs`, just modified some parts myself.

Last updated: `2021-03-24` by `johnnywang`.
