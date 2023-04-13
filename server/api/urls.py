from django.urls import path
from . import views

urlpatterns = [
    path("", views.getRoutes, name="getroutes"),
    path("notes/", views.getNotes, name="allnotes"),
    # path("genericnotes/", views.NoteDetailView.as_view(), name="allnotes"),
    path("notes/<int:pk>/", views.getnote, name="singlenote"),
    path('update/note/<int:pk>/', views.updatenote, name="updatenote"),
    path('delete/note/<int:pk>', views.deletenote, name='delete_note')

]