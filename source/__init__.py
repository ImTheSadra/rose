from pygame import *
from .shape import Shape
init()

def run():
    window = display.set_mode((700,700))
    shape = Shape(window)
    running = True

    while running:
        window.fill((51,51,51))
        shape.draw()
        shape.check()

        for ev in event.get():
            if ev.type == QUIT:running=False
        
        display.flip()