import bokeh.plotting
import bokeh.models
js_callback = bokeh.models.CustomJS(code="""
   if (typeof React === "undefined") {
      console.log("React is not available");
   } else {
      console.log("React!");
   }
""")
button = bokeh.models.Button()
button.js_on_click(js_callback)
document = bokeh.plotting.curdoc()
document.add_root(button)
