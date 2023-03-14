---
title: Vic's Modern Warfare
position: 1
---

# Vic's Modern Warfare
Vic's Modern Warfare is a core feature of GeoPol. The mod adds a large amount of highly detailed, customizable guns, ranging from simple pistols to rocket launchers and machineguns.
## Guns
VMW includes a wide variety of firearms from almost every major historical era, such as **WW2** and **WW1**, but also from the **Cold War** and the **War on Terror**. All of them are almost digital replicas of their real life counterparts.

### *How can I get guns?*
If you are a new player, we recommend purchasing one from the gun shop, where you can find basic, low level firearms for a reasonable price, such as the G2 Contender.

Once you get enough resources and want to have advanced guns, like machineguns, you can craft them and other VMW items in the Gun Workbench. 

## Attachments
As of V3, scopes, sights, grips, lasers and suppresors can be made in the Gun Workbench. You cannot purchase attachments in a shop.

## Ammunition
To make any caliber rounds, you have to use the bullet assembly machine. You will need the following materials:

- Copper
- Tin
- Gunpowder

## Explosives
Grenades, RPG rounds, and 40mm grenades can be crafted.

## Shaders

This mod breaks all shader compatibility out of the box. If you want to use shaders, you will need to disable the `enableAllShaders` in the mwc.cfg file. You can find this file in the config folder of the modpack. It should look like this:

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