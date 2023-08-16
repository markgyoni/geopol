---
title: Modern Warfare Cubed
sidebar_position: 1
---

# Modern Warfare Cubed
[Modern Warfare Cubed](https://github.com/Cubed-Development/Modern-Warfare-Cubed) (A fork of Vic's Modern Warfare) is a core feature of GeoPol. The mod adds a large amount of highly detailed, customizable guns, ranging from simple pistols to rocket launchers and machineguns.

## Guns
VMW includes a wide variety of firearms from every major historical era, including **WW1** and **WW2**, but also from the **Cold War** and the **War on Terror**. All are near-perfect digital replicas of their real life counterparts.

### *How can I get guns?*
Guns can be gotten in Airdrops and from Raidbases, Scaling with each teir. 

Once you have enough resources and want more advanced guns, like machine guns, you can craft them and other MWC items in the Gun Workbench. 

### Attachments
As of V3, all scopes, sights, grips, lasers and suppresors must be made in the Gun Workbench. You cannot purchase attachments in a shop.

### Ammunition
To make any caliber rounds, you use the Ammo Press. You will need the following materials:

- Copper
- Tin
- Gunpowder
- Steel

## Explosives
Grenades, RPG rounds, and 40mm grenades can be crafted. 

## Enabling Shaders

This mod breaks all shader compatibility out of the box. If you still want to use shaders, you will need to disable the `enableAllShaders` in the mwc.cfg file. You can find this file in the config folder of the modpack. It should look like this:

```a title="/config/mwc.cfg"
gameplay {
    # Enables the ammo counter
    B:enableAmmoCounter=true

    ...
}

rendering {
    # Setting this to false disables all shaders, enabling allows to select which shaders are used.
    B:enableAllShaders=false <--- Set this to false

    # Enables the fancy MWC snow/rain
    B:enableFancyRainAndSnow=true

    ...
}
```

## Built-in Shaders
**The modpack comes installed with the following shaders:** 

(These require Optifine and [MW shaders](#shaders) to be disabled)

- Complementary Reimagined (Low)
- Complementary Reimagined (Medium)
- Complementary Reimagined (High)
- Complementary Reimagined (Ultra)
- Sildur's Enhanced Default (Fast)
- Sildur's Enhanced Default (Fancy)
- Sildur's Vibrant Shaders (Medium)
- Sildur's Vibrant Shaders (High)

**These have all been tested and are sorted from best to worst FPS.**
