from django.shortcuts import render
from django.http import JsonResponse

# Create your views here.
def getRoutes(request):
    routes = [
        {
            'endpoint':'/notes/',
            'method':'GET',
            'body': None,
            'description':'Returns an array of list of notes'
        },
        {
            'endpoint':'/notes/id',
            'method':'GET',
            'body': None,
            'description':'Returns info about a single note'
        },
        {
            'endpoint':'/notes/create/',
            'method':'POST',
            'body': {'body':""},
            'description':'create a note with the given details in the body'
        },
        {
            'endpoint':'notes/delete/id',
            'method':'GET',
            'body': None,
            'description':'delete the note with the given id'
        }
    ]
    return JsonResponse(routes, safe=False)