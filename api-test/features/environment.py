from utilities.configurations import *


def before_scenario(context, scenario):
    context.url = getconfig()['API']['endpoint']
