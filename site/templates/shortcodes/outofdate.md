{% extends "shortcodes/callout.html" %}
{% block typeclass %}error{% endblock %}
{% block typetitle %}Error{% endblock %}
{%- block callout -%}
{%- set link = "[github repo]("~config.extra.repo~")" | markdown(inline=true) -%}
This article might be out-of-date!

Some content on this article might not be accurate to the latest canon. You can help update the details with a pull request on our {{ link }}.'
{%- endblock -%}