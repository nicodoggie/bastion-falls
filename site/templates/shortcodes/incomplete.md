{% extends "shortcodes/callout.html" %}
{% block typeclass %}warning{% endblock %}
{% block typetitle %}Warning{% endblock %}
{%- block callout -%}
{%- set link = "[github repo]("~config.extra.repo~")" | markdown(inline=true) -%}
This article is incomplete!

You can help fill in the details with a pull request on our {{ link }}.
{%- endblock -%}