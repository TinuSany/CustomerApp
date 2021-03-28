import configparser


def getconfig():
    config = configparser.ConfigParser()
    config.read('utilities/properties.ini')
    return config


def getsize(employeeno):
    small = int(getconfig()['API']['Small'])
    medium = int(getconfig()['API']['Medium'])
    if employeeno > medium:
        return "Big"
    elif employeeno > small:
        return "Medium"
    else:
        return "Small"
