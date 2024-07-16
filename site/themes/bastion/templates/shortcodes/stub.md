{% extends "shortcodes/callout.html" %}
{% block typeclass %}warning{% endblock %}
{% block typetitle %}Warning{% endblock %}
{%- block callout -%}
{%- set link = "[github repo]("~config.extra.repo~")" | markdown(inline=true) -%}
This article is a stub! New content can be contributed as a pull request on our {{ link }}.
{%- endblock -%}