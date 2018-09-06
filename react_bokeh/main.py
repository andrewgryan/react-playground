import bokeh.plotting
import bokeh.models

# Buttons
button_1 = bokeh.models.Button(label="Button 1")
js_callback = bokeh.models.CustomJS(code="""
    console.log('Button 1');
""")
button_1.js_on_click(js_callback)

button_2 = bokeh.models.Button(label="Button 2")
js_callback = bokeh.models.CustomJS(code="""
    console.log('Button 2');
""")
button_2.js_on_click(js_callback)

# Add a column data source
source = bokeh.models.ColumnDataSource({
    "x": [1, 2, 3],
    "y": [1, 2, 3]
})
figure = bokeh.plotting.figure()
figure.circle(x="x", y="y", source=source)

# Layout
row = bokeh.layouts.row(button_1, button_2)
layout = bokeh.layouts.column(figure, row)
document = bokeh.plotting.curdoc()
document.add_root(layout)
