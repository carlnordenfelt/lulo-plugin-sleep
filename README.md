# lulo sleep

lulo sleep is a plugin for [lulo](https://github.com/carlnordenfelt/lulo).

It sleeps execution for the given number of seconds.
Best used in conjunction with the DependsOn attribute for delaying CloudFormation resource execution.

# Installation
```
$ npm install lulo-plugin-sleep --save
```

## Usage
### Properties
* `Sleep`: The number of seconds you want to sleep. Required.

### Return Values
No return values

### Required IAM Permissions
The Custom Resource Lambda requires no additional IAM Permissions.

## License
[The MIT License (MIT)](/LICENSE)

## Change Log
[Change Log](/CHANGELOG.md)
