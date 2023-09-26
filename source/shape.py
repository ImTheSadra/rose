from pygame import *
import math
from pygame.font import Font, get_default_font as defFont, init
init()

class Shape:
    k = 0
    speed = 0.001
    def __init__(self, window:Surface) -> None:
        self.window = window
        TWOPI:list[float] = []
        for i in range(630): # 6.30 in all PC is 365deg
            TWOPI.append(i/100)
        self.TWOPI = TWOPI
        self.font = Font(defFont(), 30)

    def draw(self):
        center = (
            self.window.get_width()/2,
            self.window.get_height()/2
        )
        old = None
        for angle in self.TWOPI:
            r = 200*math.cos(self.k*angle)
            pos = (
                center[0]+math.cos(angle)*r,
                center[1]-math.sin(angle)*r
            )
            if old != None:
                draw.line(
                    self.window,
                    (255,255,255),
                    old, pos, 1
                )
            old = pos
    
    def check(self):
        self.k += self.speed
        if self.k > 8:
            self.speed = -0.001
        if self.k < 0:
            self.speed =  0.001

        txt = self.font.render(str(self.k), True, (200, 200, 200))
        self.window.blit(
            txt, (20,20)
        )