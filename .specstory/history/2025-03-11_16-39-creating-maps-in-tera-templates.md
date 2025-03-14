## SpecStory

## Creating Maps in Tera Templates (3/11/2025, 4:39:58 PM)

_**User**_

is there a way, in zola's templating engine, tera, to create maps or objects on runtime?

---

_**Assistant**_

In Zola's templating engine, Tera, you can create maps or objects at runtime using the `set` and `set_global` functions. These functions allow you to define variables and store data in a way that can be accessed throughout your template.

Here's a brief overview of how you can use these functions:

1. **`set`**: This function is used to create a local variable within a block. The variable is only accessible within the block where it is defined.

   ```tera
   {% set my_map = { "key1": "value1", "key2": "value2" } %}
   ```

2. **`set_global`**: This function is used to create a global variable that can be accessed throughout the entire template. This is useful for storing data that needs to be shared across different parts of the template.

   ```tera
   {% set_global my_global_map = { "key1": "value1", "key2": "value2" } %}
   ```

In your specific case, you are already using `set_global` to create a list of fields and lexitems. If you want to create a map or object, you can use a similar approach by defining a map with key-value pairs.

Here's an example of how you might modify your existing code to create a map:

```tera
{% set_global my_map = {} %}

{% if lexdata | safe %}
{% for lexitem in lexdata["@graph"] | sort(attribute="@id") %}
    {% if lexitem.sense %}
        {% for sense in lexitem.sense %}
            {% if sense["lexinfo:semanticField"] %}
                {% set field = sense["lexinfo:semanticField"] %}
                {% set_global my_map = my_map | merge({ field: lexitem }) %}
            {% endif %}
        {% endfor %}
    {% endif %}
{% endfor %}
{% endif %}

{{ my_map }}
```

In this example, `my_map` is a global map that stores `lexitem` objects with their corresponding `semanticField` as keys. The `merge` filter is used to add new key-value pairs to the map.

This approach allows you to dynamically create and manipulate maps or objects at runtime within your Tera templates.

---

_**User**_

I tried that, it errors out

---

_**Assistant**_

It seems like there might be an issue with the way the map is being manipulated in Tera. Let's go through a few potential pitfalls and solutions:

1. **Tera's Limitations**: Tera is not a full programming language, so its capabilities for complex data structures like maps or objects are limited. The `merge` filter might not work as expected for creating or updating maps.

2. **Alternative Approach**: Instead of trying to create a map, you might consider using a list of tuples or a list of objects, depending on what you need to achieve. This can sometimes be a more straightforward approach in Tera.

3. **Debugging**: Check the error message you received. It might provide clues about what went wrong. Common issues include syntax errors or trying to use unsupported operations.

4. **Simplified Example**: Let's try a simpler example to see if we can isolate the issue:

   ```tera
   {% set_global fields = [] %}

   {% if lexdata | safe %}
   {% for lexitem in lexdata["@graph"] | sort(attribute="@id") %}
       {% if lexitem.sense %}
           {% for sense in lexitem.sense %}
               {% if sense["lexinfo:semanticField"] %}
                   {% set field = sense["lexinfo:semanticField"] %}
                   {% set_global fields = fields | concat(with=[(field, lexitem)]) %}
               {% endif %}
           {% endfor %}
       {% endif %}
   {% endfor %}
   {% endif %}

   {{ fields }}
   ```

   In this example, instead of trying to create a map, we create a list of tuples, where each tuple contains a `field` and its corresponding `lexitem`.

If you can provide the specific error message, I might be able to offer more targeted advice.

---

_**User**_

doesn't seem like you can assign tuples either

---

_**Assistant**_

It seems like Tera's templating engine has limitations when it comes to handling complex data structures like maps or tuples. Tera is primarily designed for rendering templates, so its data manipulation capabilities are quite basic.

Given these constraints, here are a few alternative approaches you might consider:

1. **Pre-process Data**: If possible, preprocess your data before passing it to the template. This can be done in your backend code, where you can create the necessary data structures (like maps or tuples) and then pass them to the template as a simple list or dictionary.

2. **Use Lists**: Instead of trying to create a map or tuple, you can use a list of lists or a list of dictionaries. This is more in line with what Tera can handle.

3. **Custom Shortcodes**: If you have control over the Zola setup, consider writing a custom shortcode or filter in Rust to handle more complex data manipulations. This would allow you to extend Tera's capabilities.

4. **Simplified Example**: Here's a simplified approach using lists:

   ```tera
   {% set_global fields = [] %}

   {% if lexdata | safe %}
   {% for lexitem in lexdata["@graph"] | sort(attribute="@id") %}
       {% if lexitem.sense %}
           {% for sense in lexitem.sense %}
               {% if sense["lexinfo:semanticField"] %}
                   {% set field = sense["lexinfo:semanticField"] %}
                   {% if field not in fields %}
                       {% set_global fields = fields | concat(with=[field, lexitem]) %}
                   {% endif %}
               {% endif %}
           {% endfor %}
       {% endif %}
   {% endfor %}
   {% endif %}

   {{ fields }}
   ```

   In this example, `fields` is a flat list where each entry is either a field or a lexitem. You can then process this list in your template logic.

If you need more complex data handling, preprocessing the data in your backend or using custom Rust code might be the best solution.

---



---

