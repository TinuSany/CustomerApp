import requests
from behave import *
from utilities.resources import *
from utilities.configurations import *


@given('I have a valid request for Customer List API')
def step_impl(context):
    context.headers = {"Content-Type": "application/json"}
    for row in context.table:
        context.payload = getpayload(row['name'])


@when('I execute the API with a POST request using a valid request body')
def step_impl(context):
    context.response = requests.post(context.url, json=context.payload, headers=context.headers, )


@then('Status code of response should be {statuscode:d}')
def step_impl(context, statuscode):
    assert context.response.status_code == statuscode


@then('the content type should be json')
def step_impl(context):
    assert context.response.headers['Content-Type'] == 'application/json; charset=utf-8'


@then('the name on the response should be same as request')
def step_impl(context):
    response_json = context.response.json()
    context.name = response_json['name']
    for row in context.table:
        assert context.name == row['name']


@then('the details should match for a given record')
def step_impl(context):
    response_json = context.response.json()
    customers = response_json['customers']
    for customer in customers:
        id = customer['id']
        if id == int(context.table[0]['id']):
            companyname = customer['name']
            assert companyname == context.table[0]['companyname']
            numberofemployees = customer['employees']
            assert numberofemployees == int(context.table[0]['numberofemployees'])
            if context.table[0]['contactname'] != "":
                contactname = customer['contactInfo']['name']
                assert contactname == context.table[0]['contactname']
                contactemail = customer['contactInfo']['email']
                assert contactemail == context.table[0]['contactemail']
            size = customer['size']
            assert size == context.table[0]['size']


@then('size of the company should be displayed based on the business logic')
def step_impl(context):
    response_json = context.response.json()
    customers = response_json['customers']
    for customer in customers:
        numberofemployees = customer['employees']
        size = customer['size']
        expsize = getsize(numberofemployees)
        assert size == expsize

