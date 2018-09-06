import bokeh.plotting
import bokeh.models
js_callback = bokeh.models.CustomJS(code="""
    Forest();
""")
button = bokeh.models.Button()
button.js_on_click(js_callback)
document = bokeh.plotting.curdoc()
document.add_root(button)
