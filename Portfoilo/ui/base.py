import reflex as rx

from .nav import navbar_dropdown

def base_page(child: rx.Component, hide_navbar=False, *args, **kwargs) -> rx.Component:
    
    if not isinstance(child,rx. Component):
        child = rx.heading("no valid child")
    if hide_navbar:
        return rx.container(
            child,
            rx.logo(),
            rx.color_mode.button(position="bottom-right"),
    )
    return rx.fragment(
        navbar_dropdown(),
        rx.box(
            child,
            #bg=rx.color("accent", 3),
            padding="1em",
            width="100%",
        ),
        rx.logo(),
        rx.color_mode.button(position="bottom-right"),
    )