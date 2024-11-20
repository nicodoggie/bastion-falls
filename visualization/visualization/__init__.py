import numpy as np
import matplotlib.pyplot as plt
from matplotlib.patches import Circle, PathPatch
from matplotlib.path import Path
import matplotlib.animation as animation

class PtolemaicSystem:
    def __init__(self):
        self.planets = {
            'Cruyme': {'deferent': 0.4, 'epicycle': 0.1, 'period': 0.24},
            'Nevus': {'deferent': 0.7, 'epicycle': 0.15, 'period': 0.62},
            'Rams': {'deferent': 1.5, 'epicycle': 0.2, 'period': 1.88},
            'Rejupit': {'deferent': 2.2, 'epicycle': 0.3, 'period': 11.86},
            'Surtan': {'deferent': 2.8, 'epicycle': 0.4, 'period': 29.46},
            'Suran': {'deferent': 3.2, 'epicycle': 0.4, 'period': 30.69},
            'Pentune': {'deferent': 4.0, 'epicycle': 0.5, 'period': 164.79}
        }
        
    def calculate_position(self, planet, time):
        p = self.planets[planet]
        # Main deferent motion
        x_def = p['deferent'] * np.cos(2 * np.pi * time / p['period'])
        y_def = p['deferent'] * np.sin(2 * np.pi * time / p['period'])
        
        # Epicycle motion
        x_epi = p['epicycle'] * np.cos(2 * np.pi * time * 2)
        y_epi = p['epicycle'] * np.sin(2 * np.pi * time * 2)
        
        return x_def + x_epi, y_def + y_epi

    def plot_system(self, time=0):
        fig, ax = plt.subplots(figsize=(12, 12))
        ax.set_aspect('equal')
        
        # Plot Thera at center
        ax.add_patch(Circle((0, 0), 0.1, color='blue', label='Thera'))
        
        # Plot each planet's orbit and position
        colors = plt.cm.rainbow(np.linspace(0, 1, len(self.planets)))
        for (planet, params), color in zip(self.planets.items(), colors):
            # Draw deferent circle
            ax.add_patch(Circle((0, 0), params['deferent'], 
                              fill=False, linestyle='--', color=color))
            
            # Calculate and plot current position
            x, y = self.calculate_position(planet, time)
            ax.plot(x, y, 'o', color=color, label=planet)
            
            # Draw epicycle path
            t = np.linspace(0, 2*np.pi, 100)
            x_epi = x + params['epicycle'] * np.cos(t)
            y_epi = y + params['epicycle'] * np.sin(t)
            ax.plot(x_epi, y_epi, '-', color=color, alpha=0.3)

        ax.set_xlim(-5, 5)
        ax.set_ylim(-5, 5)
        ax.grid(True, linestyle=':', alpha=0.5)
        ax.set_title("Theracentric Ptolemaic Model")
        ax.legend(loc='upper right')
        
        return fig, ax

if __name__ == "__main__":
    system = PtolemaicSystem()
    fig, ax = system.plot_system()
    plt.savefig('ptolemaic_thera.png', dpi=300, bbox_inches='tight')