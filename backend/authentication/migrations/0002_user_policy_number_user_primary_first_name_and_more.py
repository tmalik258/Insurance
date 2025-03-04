# Generated by Django 5.1.6 on 2025-03-03 23:05

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('authentication', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='user',
            name='policy_number',
            field=models.PositiveIntegerField(default=456897, max_length=20),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='user',
            name='primary_first_name',
            field=models.CharField(default='hello', max_length=255),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='user',
            name='primary_last_name',
            field=models.CharField(default='world', max_length=255),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='user',
            name='user_type',
            field=models.CharField(choices=[('individual', 'Individual'), ('business', 'Business')], default='individual', max_length=20),
        ),
        migrations.AddField(
            model_name='user',
            name='zip_code',
            field=models.CharField(default=56000, max_length=10),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='user',
            name='first_name',
            field=models.CharField(blank=True, max_length=255, null=True),
        ),
        migrations.AlterField(
            model_name='user',
            name='last_name',
            field=models.CharField(blank=True, max_length=255, null=True),
        ),
    ]
