{%- for pair in site.data.lessons[include.lesson]["Code"] -%}
[{{ pair[0] }}]({{ pair[1] }}){: .btn .btn-purple .mr-3 }
{%- endfor -%}
