from django.db.models.signals import post_save
from django.contrib.auth.models import User
from django.dispatch import receiver
from .models import PerfilUsuario

@receiver(post_save, sender=User)
def crear_perfil(sender, instance, created, **kwargs):
    if created:
        PerfilUsuario.objects.create(user=instance)

@receiver(post_save, sender=User)
def actualizar_perfil(sender, instance, created, **kwargs):
    if not created:
        perfil, creado = PerfilUsuario.objects.get_or_create(user=instance)
        perfil.save()


