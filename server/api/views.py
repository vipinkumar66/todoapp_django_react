from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import generics
from .models import Note

from .serializers import NoteSerializers

# class NoteDetailView(generics.GenericAPIView):
#     queryset = Note.objects.all()
#     serializer_class = NoteSerializers

@api_view(['GET'])
def getRoutes(request):
    """
    API TO GET ALL THE ROUTES
    """
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
    return Response(routes)

@api_view(['GET'])
def getNotes(request):
    notes = Note.objects.all()
    serializer = NoteSerializers(notes, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def getnote(request, pk):
    note = Note.objects.get(id=pk)
    serializer = NoteSerializers(note)
    return Response(serializer.data)

@api_view(['PUT'])
def updatenote(request, pk, format=None):
    """
    This will get the data from the frontend and pass it to the serializer to check
    its validity and then if proper save it otherwise return the error
    """
    data = request.data
    note = Note.objects.get(id=pk)
    serializer = NoteSerializers(instance=note, data=data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=200)
    return Response(serializer.errors, status=400)