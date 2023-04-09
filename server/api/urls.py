from django.urls import path
from . import views

urlpatterns = [
    path("", views.getRoutes, name="getroutes"),
    path("notes/", views.getNotes, name="allnotes"),
    # path("genericnotes/", views.NoteDetailView.as_view(), name="allnotes"),
    path("notes/<int:pk>/", views.getnote, name="singlenote")

]