# Generated by Django 5.1.6 on 2025-03-07 01:24

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('authentication', '0002_user_policy_number_user_primary_first_name_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='user',
            name='policy_number',
            field=models.PositiveIntegerField(),
        ),
    ]
