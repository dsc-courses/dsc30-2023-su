{%- for pair in site.data.lessons[include.lesson]["Code"] -%}
[{{ pair[0] }}]({{ pair[1] }}){: .label .btn-purple .mr-0 }
{%- endfor -%}
