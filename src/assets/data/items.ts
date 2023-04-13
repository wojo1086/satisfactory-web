export interface Items {
    hatcherRemains: Item,
    hogRemains: Item,
    spitterRemains: Item,
    stingerRemains: Item,
    limestone: Item,
    ironOre: Item,
    copperOre: Item,
    cateriumOre: Item,
    coal: Item,
    rawQuartz: Item,
    sulfur: Item,
    bauxite: Item,
    samOre: Item,
    uranium: Item,
    leaves: Item,
    mycelia: Item,
    flowerPetals: Item,
    wood: Item,
    alienProtein: Item,
    organicDataCapsule: Item,
    ironIngot: Item,
    copperIngot: Item,
    cateriumIngot: Item,
    steelIngot: Item,
    aluminumIngot: Item,
    concrete: Item,
    quartzCrystal: Item,
    silica: Item,
    copperPowder: Item,
    polymerResin: Item,
    petroleumCoke: Item,
    aluminumScrap: Item,
    water: Item,
    crudeOil: Item,
    heavyOilResidue: Item,
    fuel: Item,
    liquidBiofuel: Item,
    turbofuel: Item,
    aluminaSolution: Item,
    sulfuricAcid: Item,
    nitricAcid: Item,
    nitrogenGas: Item,
    ironRod: Item,
    screw: Item,
    ironPlate: Item,
    reinforcedIronPlate: Item,
    copperSheet: Item,
    alcladAluminumSheet: Item,
    aluminumCasing: Item,
    steelPipe: Item,
    steelBeam: Item,
    encasedIndustrialBeam: Item,
    modularFrame: Item,
    heavyModularFrame: Item,
    fusedModularFrame: Item,
    fabric: Item,
    plastic: Item,
    rubber: Item,
    rotor: Item,
    stator: Item,
    battery: Item,
    motor: Item,
    heatSink: Item,
    coolingSystem: Item,
    turboMotor: Item,
    wire: Item,
    cable: Item,
    quickwire: Item,
    circuitBoard: Item,
    aiLimiter: Item,
    highSpeedConnector: Item,
    computer: Item,
    supercomputer: Item,
    radioControlUnit: Item,
    crystalOscillator: Item,
    emptyCanister: Item,
    emptyFluidTank: Item,
    pressureConversionCube: Item,
    packagedWater: Item,
    packagedAluminaSolution: Item,
    packagedSulfuricAcid: Item,
    packagedNitricAcid: Item,
    packagedNitrogenGas: Item,
    compactedCoal: Item,
    packagedOil: Item,
    packagedHeavyOilResidue: Item,
    packagedFuel: Item,
    packagedLiquidBiofuel: Item,
    packagedTurbofuel: Item,
    solidBiofuel: Item,
    biomass: Item,
    uraniumFuelRod: Item,
    plutoniumFuelRod: Item,
    blackPowder: Item,
    smokelessPowder: Item,
    gasFilter: Item,
    colorCartridge: Item,
    beacon: Item,
    iodineInfusedFilter: Item,
    electromagneticControlRod: Item,
    encasedUraniumCell: Item,
    nonfissileUranium: Item,
    plutoniumPellet: Item,
    encasedPlutoniumCell: Item,
    uraniumWaste: Item,
    plutoniumWaste: Item,
    smartPlating: Item,
    versatileFramework: Item,
    automatedWiring: Item,
    modularEngine: Item,
    adaptiveControlUnit: Item,
    assemblyDirectorSystem: Item,
    magneticFieldGenerator: Item,
    thermalPropulsionRocket: Item,
    nuclearPasta: Item
}

export interface Item {
    name: string,
    piped: boolean,
    isRaw: boolean,
    handPicked: boolean,
    default: string,
    recipes: Recipe
}

export interface Recipe {
    [key: string]: RecipeDetails
}

export interface RecipeDetails {
    name: string,
    machine: string,
    inputs: Input,
    outputs: Output,
    parentRecipe: keyof Items
}

export interface Input {
    [key: string]: InputDetails
}

export interface InputDetails {
    amount: number,
    rate: number
}

export interface Output {
    [key: string]: OutputDetails
}

export interface OutputDetails extends InputDetails {
}

export const items: Items = {
    hatcherRemains: {
        name: "Hatcher Remains",
        piped: false,
        isRaw: true,
        handPicked: true,
        default: "",
        recipes: {}
    },
    hogRemains: {
        name: "Hog Remains",
        piped: false,
        isRaw: true,
        handPicked: true,
        default: "",
        recipes: {}
    },
    spitterRemains: {
        name: "Plasma Spitter Remains",
        piped: false,
        isRaw: true,
        handPicked: true,
        default: "",
        recipes: {}
    },
    stingerRemains: {
        name: "Stinger Remains",
        piped: false,
        isRaw: true,
        handPicked: true,
        default: "",
        recipes: {}
    },
    limestone: {
        name: "Limestone",
        piped: false,
        isRaw: true,
        handPicked: false,
        default: "",
        recipes: {
            limestone: {
                name: "Limestone",
                machine: "miner",
                inputs: {},
                outputs: {
                    limestone: {
                        amount: 1,
                        rate: 30
                    }
                },
                parentRecipe: "limestone"
            }
        }
    },
    ironOre: {
        name: "Iron Ore",
        piped: false,
        isRaw: true,
        handPicked: false,
        default: "",
        recipes: {
            ironOre: {
                name: "Iron Ore",
                machine: "miner",
                inputs: {},
                outputs: {
                    ironOre: {
                        amount: 1,
                        rate: 30
                    }
                },
                parentRecipe: "ironOre"
            }
        }
    },
    copperOre: {
        name: "Copper Ore",
        piped: false,
        isRaw: true,
        handPicked: false,
        default: "",
        recipes: {
            copperOre: {
                name: "Copper Ore",
                machine: "miner",
                inputs: {},
                outputs: {
                    copperOre: {
                        amount: 1,
                        rate: 30
                    }
                },
                parentRecipe: "copperOre"
            }
        }
    },
    cateriumOre: {
        name: "Caterium Ore",
        piped: false,
        isRaw: true,
        handPicked: false,
        default: "",
        recipes: {
            cateriumOre: {
                name: "Caterium Ore",
                machine: "miner",
                inputs: {},
                outputs: {
                    cateriumOre: {
                        amount: 1,
                        rate: 30
                    }
                },
                parentRecipe: "cateriumOre"
            }
        }
    },
    coal: {
        name: "Coal",
        piped: false,
        isRaw: true,
        handPicked: false,
        default: "",
        recipes: {
            coal: {
                name: "Coal",
                machine: "miner",
                inputs: {},
                outputs: {
                    coal: {
                        amount: 1,
                        rate: 30
                    }
                },
                parentRecipe: "coal"
            }
        }
    },
    rawQuartz: {
        name: "Raw Quartz",
        piped: false,
        isRaw: true,
        handPicked: false,
        default: "",
        recipes: {
            rawQuartz: {
                name: "Raw Quartz",
                machine: "miner",
                inputs: {},
                outputs: {
                    rawQuartz: {
                        amount: 1,
                        rate: 30
                    }
                },
                parentRecipe: "rawQuartz"
            }
        }
    },
    sulfur: {
        name: "Sulfur",
        piped: false,
        isRaw: true,
        handPicked: false,
        default: "",
        recipes: {
            sulfur: {
                name: "Sulfur",
                machine: "miner",
                inputs: {},
                outputs: {
                    sulfur: {
                        amount: 1,
                        rate: 30
                    }
                },
                parentRecipe: "sulfur"
            }
        }
    },
    bauxite: {
        name: "Bauxite",
        piped: false,
        isRaw: true,
        handPicked: false,
        default: "",
        recipes: {
            bauxite: {
                name: "Bauxite",
                machine: "miner",
                inputs: {},
                outputs: {
                    bauxite: {
                        amount: 1,
                        rate: 30
                    }
                },
                parentRecipe: "bauxite"
            }
        }
    },
    samOre: {
        name: "S.A.M. Ore",
        piped: false,
        isRaw: true,
        handPicked: false,
        default: "",
        recipes: {
            samOre: {
                name: "S.A.M. Ore",
                machine: "miner",
                inputs: {},
                outputs: {
                    samOre: {
                        amount: 1,
                        rate: 30
                    }
                },
                parentRecipe: "samOre"
            }
        }
    },
    uranium: {
        name: "Uranium",
        piped: false,
        isRaw: true,
        handPicked: false,
        default: "",
        recipes: {
            uranium: {
                name: "Uranium",
                machine: "miner",
                inputs: {},
                outputs: {
                    uranium: {
                        amount: 1,
                        rate: 30
                    }
                },
                parentRecipe: "uranium"
            }
        }
    },
    leaves: {
        name: "Leaves",
        piped: false,
        isRaw: true,
        handPicked: true,
        default: "",
        recipes: {}
    },
    mycelia: {
        name: "Mycelia",
        piped: false,
        isRaw: true,
        handPicked: true,
        default: "",
        recipes: {}
    },
    flowerPetals: {
        name: "Flower Petals",
        piped: false,
        isRaw: true,
        handPicked: true,
        default: "",
        recipes: {}
    },
    wood: {
        name: "Wood",
        piped: false,
        isRaw: true,
        handPicked: true,
        default: "",
        recipes: {}
    },
    alienProtein: {
        name: "Alien Protein",
        piped: false,
        isRaw: false,
        handPicked: false,
        default: "hogProtein",
        recipes: {
            hatcherProtein: {
                name: "Hatcher Protein",
                machine: "constructor",
                inputs: {
                    hatcherRemains: {
                        amount: 1,
                        rate: 20
                    }
                },
                outputs: {
                    alienProtein: {
                        amount: 1,
                        rate: 20
                    }
                },
                parentRecipe: "alienProtein"
            },
            hogProtein: {
                name: "Hog Protein",
                machine: "constructor",
                inputs: {
                    hogRemains: {
                        amount: 1,
                        rate: 20
                    }
                },
                outputs: {
                    alienProtein: {
                        amount: 1,
                        rate: 20
                    }
                },
                parentRecipe: "alienProtein"
            },
            spitterProtein: {
                name: "Spitter Protein",
                machine: "constructor",
                inputs: {
                    spitterRemains: {
                        amount: 1,
                        rate: 20
                    }
                },
                outputs: {
                    alienProtein: {
                        amount: 1,
                        rate: 20
                    }
                },
                parentRecipe: "alienProtein"
            },
            stingerProtein: {
                name: "Stinger Protein",
                machine: "constructor",
                inputs: {
                    stingerRemains: {
                        amount: 1,
                        rate: 20
                    }
                },
                outputs: {
                    alienProtein: {
                        amount: 1,
                        rate: 20
                    }
                },
                parentRecipe: "alienProtein"
            }
        }
    },
    organicDataCapsule: {
        name: "Organic Data Capsule",
        piped: false,
        isRaw: false,
        handPicked: false,
        default: "organicDataCapsule",
        recipes: {
            organicDataCapsule: {
                name: "Organic Data Capsule",
                machine: "constructor",
                inputs: {
                    alienProtein: {
                        amount: 1,
                        rate: 10
                    }
                },
                outputs: {
                    organicDataCapsule: {
                        amount: 1,
                        rate: 10
                    }
                },
                parentRecipe: "organicDataCapsule"
            }
        }
    },
    ironIngot: {
        name: "Iron Ingot",
        piped: false,
        isRaw: false,
        handPicked: false,
        default: "ironIngot",
        recipes: {
            ironIngot: {
                name: "Iron Ingot",
                machine: "smelter",
                inputs: {
                    ironOre: {
                        amount: 1,
                        rate: 30
                    }
                },
                outputs: {
                    ironIngot: {
                        amount: 1,
                        rate: 30
                    }
                },
                parentRecipe: "ironIngot"
            },
            altPureIronIngot: {
                name: "Alternate: Pure Iron Ingot",
                machine: "refinery",
                inputs: {
                    ironOre: {
                        amount: 7,
                        rate: 35
                    },
                    water: {
                        amount: 4,
                        rate: 20
                    }
                },
                outputs: {
                    ironIngot: {
                        amount: 13,
                        rate: 65
                    }
                },
                parentRecipe: "ironIngot"
            },
            altIronAlloyIngot: {
                name: "Alternate: Iron Alloy Ingot",
                machine: "foundry",
                inputs: {
                    ironOre: {
                        amount: 2,
                        rate: 20
                    },
                    copperOre: {
                        amount: 2,
                        rate: 20
                    }
                },
                outputs: {
                    ironIngot: {
                        amount: 5,
                        rate: 50
                    }
                },
                parentRecipe: "ironIngot"
            }
        }
    },
    copperIngot: {
        name: "Copper Ingot",
        piped: false,
        isRaw: false,
        handPicked: false,
        default: "copperIngot",
        recipes: {
            copperIngot: {
                name: "Copper Ingot",
                machine: "smelter",
                inputs: {
                    copperOre: {
                        amount: 1,
                        rate: 30
                    }
                },
                outputs: {
                    copperIngot: {
                        amount: 1,
                        rate: 30
                    }
                },
                parentRecipe: "copperIngot"
            },
            altPureCopperIngot: {
                name: "Alternate: Pure Copper Ingot",
                machine: "refinery",
                inputs: {
                    copperOre: {
                        amount: 6,
                        rate: 15
                    },
                    water: {
                        amount: 4,
                        rate: 10
                    }
                },
                outputs: {
                    copperIngot: {
                        amount: 15,
                        rate: 37.5
                    }
                },
                parentRecipe: "copperIngot"
            },
            altCopperAlloyIngot: {
                name: "Alternate: Copper Alloy Ingot",
                machine: "foundry",
                inputs: {
                    copperOre: {
                        amount: 10,
                        rate: 50
                    },
                    ironOre: {
                        amount: 5,
                        rate: 25
                    }
                },
                outputs: {
                    copperIngot: {
                        amount: 20,
                        rate: 100
                    }
                },
                parentRecipe: "copperIngot"
            }
        }
    },
    cateriumIngot: {
        name: "Caterium Ingot",
        piped: false,
        isRaw: false,
        handPicked: false,
        default: "cateriumIngot",
        recipes: {
            cateriumIngot: {
                name: "Caterium Ingot",
                machine: "smelter",
                inputs: {
                    cateriumOre: {
                        amount: 3,
                        rate: 45
                    }
                },
                outputs: {
                    cateriumIngot: {
                        amount: 1,
                        rate: 15
                    }
                },
                parentRecipe: "cateriumIngot"
            },
            altPureCateriumIngot: {
                name: "Alternate: Pure Caterium Ingot",
                machine: "refinery",
                inputs: {
                    cateriumOre: {
                        amount: 2,
                        rate: 24
                    },
                    water: {
                        amount: 2,
                        rate: 24
                    }
                },
                outputs: {
                    cateriumIngot: {
                        amount: 1,
                        rate: 12
                    }
                },
                parentRecipe: "cateriumIngot"
            }
        }
    },
    steelIngot: {
        name: "Steel Ingot",
        piped: false,
        isRaw: false,
        handPicked: false,
        default: "steelIngot",
        recipes: {
            steelIngot: {
                name: "Steel Ingot",
                machine: "foundry",
                inputs: {
                    ironOre: {
                        amount: 3,
                        rate: 45
                    },
                    coal: {
                        amount: 3,
                        rate: 45
                    }
                },
                outputs: {
                    steelIngot: {
                        amount: 3,
                        rate: 45
                    }
                },
                parentRecipe: "steelIngot"
            },
            altCokeSteelIngot: {
                name: "Alternate: Coke Steel Ingot",
                machine: "foundry",
                inputs: {
                    ironOre: {
                        amount: 15,
                        rate: 75
                    },
                    petroleumCoke: {
                        amount: 15,
                        rate: 75
                    }
                },
                outputs: {
                    steelIngot: {
                        amount: 20,
                        rate: 100
                    }
                },
                parentRecipe: "steelIngot"
            },
            altCompactedSteelIngot: {
                name: "Alternate: Compacted Steel Ingot",
                machine: "foundry",
                inputs: {
                    ironOre: {
                        amount: 6,
                        rate: 22.5
                    },
                    compactedCoal: {
                        amount: 3,
                        rate: 11.25
                    }
                },
                outputs: {
                    steelIngot: {
                        amount: 10,
                        rate: 37.5
                    }
                },
                parentRecipe: "steelIngot"
            },
            altSolidSteelIngot: {
                name: "Alternate: Solid Steel Ingot",
                machine: "foundry",
                inputs: {
                    ironIngot: {
                        amount: 2,
                        rate: 40
                    },
                    coal: {
                        amount: 2,
                        rate: 40
                    }
                },
                outputs: {
                    steelIngot: {
                        amount: 3,
                        rate: 60
                    }
                },
                parentRecipe: "steelIngot"
            }
        }
    },
    aluminumIngot: {
        name: "Aluminum Ingot",
        piped: false,
        isRaw: false,
        handPicked: false,
        default: "aluminumIngot",
        recipes: {
            aluminumIngot: {
                name: "Aluminum Ingot",
                machine: "foundry",
                inputs: {
                    aluminumScrap: {
                        amount: 6,
                        rate: 90
                    },
                    silica: {
                        amount: 5,
                        rate: 75
                    }
                },
                outputs: {
                    aluminumIngot: {
                        amount: 4,
                        rate: 60
                    }
                },
                parentRecipe: "aluminumIngot"
            },
            altPureAluminumIngot: {
                name: "Alternate: Pure Aluminum Ingot",
                machine: "smelter",
                inputs: {
                    aluminumScrap: {
                        amount: 2,
                        rate: 60
                    }
                },
                outputs: {
                    aluminumIngot: {
                        amount: 1,
                        rate: 30
                    }
                },
                parentRecipe: "aluminumIngot"
            }
        }
    },
    concrete: {
        name: "Concrete",
        piped: false,
        isRaw: false,
        handPicked: false,
        default: "concrete",
        recipes: {
            concrete: {
                name: "Concrete",
                machine: "constructor",
                inputs: {
                    limestone: {
                        amount: 3,
                        rate: 45
                    }
                },
                outputs: {
                    concrete: {
                        amount: 1,
                        rate: 15
                    }
                },
                parentRecipe: "concrete"
            },
            altFineConcrete: {
                name: "Alternate: Fine Concrete",
                machine: "assembler",
                inputs: {
                    limestone: {
                        amount: 12,
                        rate: 30
                    },
                    silica: {
                        amount: 3,
                        rate: 7.5
                    }
                },
                outputs: {
                    concrete: {
                        amount: 10,
                        rate: 25
                    }
                },
                parentRecipe: "concrete"
            },
            altRubberConcrete: {
                name: "Alternate: Rubber Concrete",
                machine: "assembler",
                inputs: {
                    limestone: {
                        amount: 10,
                        rate: 50
                    },
                    rubber: {
                        amount: 2,
                        rate: 10
                    }
                },
                outputs: {
                    concrete: {
                        amount: 9,
                        rate: 45
                    }
                },
                parentRecipe: "concrete"
            },
            altWetConcrete: {
                name: "Alternate: Wet Concrete",
                machine: "refinery",
                inputs: {
                    limestone: {
                        amount: 6,
                        rate: 120
                    },
                    water: {
                        amount: 5,
                        rate: 100
                    }
                },
                outputs: {
                    concrete: {
                        amount: 4,
                        rate: 80
                    }
                },
                parentRecipe: "concrete"
            }
        }
    },
    quartzCrystal: {
        name: "Quartz Crystal",
        piped: false,
        isRaw: false,
        handPicked: false,
        default: "quartzCrystal",
        recipes: {
            quartzCrystal: {
                name: "Quartz Crystal",
                machine: "constructor",
                inputs: {
                    rawQuartz: {
                        amount: 5,
                        rate: 37.5
                    }
                },
                outputs: {
                    quartzCrystal: {
                        amount: 3,
                        rate: 22.5
                    }
                },
                parentRecipe: "quartzCrystal"
            },
            altPureQuartzCrystal: {
                name: "Alternate: Pure Quartz Crystal",
                machine: "refinery",
                inputs: {
                    rawQuartz: {
                        amount: 9,
                        rate: 67.5
                    },
                    water: {
                        amount: 5,
                        rate: 37.5
                    }
                },
                outputs: {
                    quartzCrystal: {
                        amount: 7,
                        rate: 52.5
                    }
                },
                parentRecipe: "quartzCrystal"
            }
        }
    },
    silica: {
        name: "Silica",
        piped: false,
        isRaw: false,
        handPicked: false,
        default: "silica",
        recipes: {
            silica: {
                name: "Silica",
                machine: "constructor",
                inputs: {
                    rawQuartz: {
                        amount: 3,
                        rate: 22.5
                    }
                },
                outputs: {
                    silica: {
                        amount: 5,
                        rate: 37.5
                    }
                },
                parentRecipe: "silica"
            },
            aluminaSolution: {
                name: "Alumina Solution",
                machine: "refinery",
                inputs: {
                    bauxite: {
                        amount: 12,
                        rate: 120
                    },
                    water: {
                        amount: 18,
                        rate: 180
                    }
                },
                outputs: {
                    aluminaSolution: {
                        amount: 12,
                        rate: 120
                    },
                    silica: {
                        amount: 5,
                        rate: 50
                    }
                },
                parentRecipe: "silica"
            },
            altCheapSilica: {
                name: "Alternate: Cheap Silica",
                machine: "assembler",
                inputs: {
                    rawQuartz: {
                        amount: 3,
                        rate: 11.25
                    },
                    limestone: {
                        amount: 5,
                        rate: 18.75
                    }
                },
                outputs: {
                    silica: {
                        amount: 7,
                        rate: 26.25
                    }
                },
                parentRecipe: "silica"
            }
        }
    },
    copperPowder: {
        name: "Copper Powder",
        piped: false,
        isRaw: false,
        handPicked: false,
        default: "copperPowder",
        recipes: {
            copperPowder: {
                name: "Copper Powder",
                machine: "constructor",
                inputs: {
                    copperIngot: {
                        amount: 30,
                        rate: 300
                    }
                },
                outputs: {
                    copperPowder: {
                        amount: 5,
                        rate: 50
                    }
                },
                parentRecipe: "copperPowder"
            }
        }
    },
    polymerResin: {
        name: "Polymer Resin",
        piped: false,
        isRaw: false,
        handPicked: false,
        default: "fuel",
        recipes: {
            fuel: {
                name: "Fuel",
                machine: "refinery",
                inputs: {
                    crudeOil: {
                        amount: 6,
                        rate: 60
                    }
                },
                outputs: {
                    fuel: {
                        amount: 4,
                        rate: 40
                    },
                    polymerResin: {
                        amount: 3,
                        rate: 30
                    }
                },
                parentRecipe: "polymerResin"
            },
            altHeavyOilResidue: {
                name: "Alternate: Heavy Oil Residue",
                machine: "refinery",
                inputs: {
                    crudeOil: {
                        amount: 3,
                        rate: 30
                    }
                },
                outputs: {
                    heavyOilResidue: {
                        amount: 4,
                        rate: 40
                    },
                    polymerResin: {
                        amount: 2,
                        rate: 20
                    }
                },
                parentRecipe: "polymerResin"
            },
            altPolymerResin: {
                name: "Alternate: Polymer Resin",
                machine: "refinery",
                inputs: {
                    crudeOil: {
                        amount: 6,
                        rate: 60
                    }
                },
                outputs: {
                    heavyOilResidue: {
                        amount: 4,
                        rate: 40
                    },
                    polymerResin: {
                        amount: 2,
                        rate: 20
                    }
                },
                parentRecipe: "polymerResin"
            }
        }
    },
    petroleumCoke: {
        name: "Petroleum Coke",
        piped: false,
        isRaw: false,
        handPicked: false,
        default: "petroleumCoke",
        recipes: {
            petroleumCoke: {
                name: "Petroleum Coke",
                machine: "refinery",
                inputs: {
                    heavyOilResidue: {
                        amount: 4,
                        rate: 40
                    }
                },
                outputs: {
                    petroleumCoke: {
                        amount: 12,
                        rate: 120
                    }
                },
                parentRecipe: "petroleumCoke"
            }
        }
    },
    aluminumScrap: {
        name: "Aluminum Scrap",
        piped: false,
        isRaw: false,
        handPicked: false,
        default: "aluminumScrap",
        recipes: {
            aluminumScrap: {
                name: "Aluminum Scrap",
                machine: "refinery",
                inputs: {
                    aluminaSolution: {
                        amount: 4,
                        rate: 240
                    },
                    coal: {
                        amount: 2,
                        rate: 120
                    }
                },
                outputs: {
                    aluminumScrap: {
                        amount: 6,
                        rate: 360
                    },
                    water: {
                        amount: 2,
                        rate: 120
                    }
                },
                parentRecipe: "aluminumScrap"
            },
            altElectrodeAluminumScrap: {
                name: "Alternate: Electrode - Aluminum Scrap",
                machine: "refinery",
                inputs: {
                    aluminaSolution: {
                        amount: 12,
                        rate: 180
                    },
                    petroleumCoke: {
                        amount: 4,
                        rate: 60
                    }
                },
                outputs: {
                    aluminumScrap: {
                        amount: 20,
                        rate: 300
                    },
                    water: {
                        amount: 7,
                        rate: 105
                    }
                },
                parentRecipe: "aluminumScrap"
            },
            altInstantScrap: {
                name: "Alternate: Instant Scrap",
                machine: "blender",
                inputs: {
                    bauxite: {
                        amount: 15,
                        rate: 150
                    },
                    coal: {
                        amount: 10,
                        rate: 100
                    },
                    sulfuricAcid: {
                        amount: 5,
                        rate: 50
                    },
                    water: {
                        amount: 6,
                        rate: 60
                    }
                },
                outputs: {
                    aluminumScrap: {
                        amount: 30,
                        rate: 300
                    },
                    water: {
                        amount: 5,
                        rate: 50
                    }
                },
                parentRecipe: "aluminumScrap"
            }
        }
    },
    water: {
        name: "Water",
        piped: true,
        isRaw: true,
        handPicked: false,
        default: "",
        recipes: {
            aluminumScrap: {
                name: "Aluminum Scrap",
                machine: "refinery",
                inputs: {
                    aluminaSolution: {
                        amount: 4,
                        rate: 240
                    },
                    coal: {
                        amount: 2,
                        rate: 120
                    }
                },
                outputs: {
                    aluminumScrap: {
                        amount: 6,
                        rate: 360
                    },
                    water: {
                        amount: 2,
                        rate: 120
                    }
                },
                parentRecipe: "water"
            },
            battery: {
                name: "Battery",
                machine: "blender",
                inputs: {
                    sulfuricAcid: {
                        amount: 2.5,
                        rate: 50
                    },
                    aluminaSolution: {
                        amount: 2,
                        rate: 40
                    },
                    aluminumCasing: {
                        amount: 1,
                        rate: 20
                    }
                },
                outputs: {
                    battery: {
                        amount: 1,
                        rate: 20
                    },
                    water: {
                        amount: 1.5,
                        rate: 30
                    }
                },
                parentRecipe: "water"
            },
            nonfissileUranium: {
                name: "Non-fissile",
                machine: "blender",
                inputs: {
                    uraniumWaste: {
                        amount: 15,
                        rate: 37.5
                    },
                    silica: {
                        amount: 10,
                        rate: 25
                    },
                    nitricAcid: {
                        amount: 6,
                        rate: 15
                    },
                    sulfuricAcid: {
                        amount: 6,
                        rate: 15
                    }
                },
                outputs: {
                    nonfissileUranium: {
                        amount: 20,
                        rate: 50
                    },
                    water: {
                        amount: 6,
                        rate: 15
                    }
                },
                parentRecipe: "water"
            },
            unpackagedWater: {
                name: "Unpackaged Water",
                machine: "packager",
                inputs: {
                    packagedWater: {
                        amount: 2,
                        rate: 120
                    }
                },
                outputs: {
                    water: {
                        amount: 2,
                        rate: 120
                    },
                    emptyCanister: {
                        amount: 2,
                        rate: 120
                    }
                },
                parentRecipe: "water"
            },
            altElectrodeAluminumScrap: {
                name: "Alternate: Electrode - Aluminum Scrap",
                machine: "refinery",
                inputs: {
                    aluminaSolution: {
                        amount: 12,
                        rate: 180
                    },
                    petroleumCoke: {
                        amount: 4,
                        rate: 60
                    }
                },
                outputs: {
                    aluminumScrap: {
                        amount: 20,
                        rate: 300
                    },
                    water: {
                        amount: 7,
                        rate: 105
                    }
                },
                parentRecipe: "water"
            },
            altFertileUranium: {
                name: "Alternate: Fertile Uranium",
                machine: "blender",
                inputs: {
                    uranium: {
                        amount: 5,
                        rate: 25
                    },
                    uraniumWaste: {
                        amount: 5,
                        rate: 25
                    },
                    nitricAcid: {
                        amount: 3,
                        rate: 15
                    },
                    sulfuricAcid: {
                        amount: 5,
                        rate: 25
                    }
                },
                outputs: {
                    nonfissileUranium: {
                        amount: 20,
                        rate: 100
                    },
                    water: {
                        amount: 8,
                        rate: 40
                    }
                },
                parentRecipe: "water"
            },
            altInstantScrap: {
                name: "Alternate: Instant Scrap",
                machine: "blender",
                inputs: {
                    bauxite: {
                        amount: 15,
                        rate: 150
                    },
                    coal: {
                        amount: 10,
                        rate: 100
                    },
                    sulfuricAcid: {
                        amount: 5,
                        rate: 50
                    },
                    water: {
                        amount: 6,
                        rate: 60
                    }
                },
                outputs: {
                    aluminumScrap: {
                        amount: 30,
                        rate: 300
                    },
                    water: {
                        amount: 5,
                        rate: 50
                    }
                },
                parentRecipe: "water"
            },
            water: {
                name: "Water",
                machine: "waterExtractor",
                inputs: {},
                outputs: {
                    water: {
                        amount: 1,
                        rate: 120
                    }
                },
                parentRecipe: "water"
            }
        }
    },
    crudeOil: {
        name: "Crude Oil",
        piped: true,
        isRaw: true,
        handPicked: false,
        default: "",
        recipes: {
            unpackagedOil: {
                name: "Unpackaged Oil",
                machine: "packager",
                inputs: {
                    packagedOil: {
                        amount: 2,
                        rate: 60
                    }
                },
                outputs: {
                    crudeOil: {
                        amount: 2,
                        rate: 60
                    },
                    emptyCanister: {
                        amount: 2,
                        rate: 60
                    }
                },
                parentRecipe: "crudeOil"
            },
            crudeOil: {
                name: "Crude Oil",
                machine: "oilExtractor",
                inputs: {},
                outputs: {
                    crudeOil: {
                        amount: 1,
                        rate: 60
                    }
                },
                parentRecipe: "crudeOil"
            }
        }
    },
    heavyOilResidue: {
        name: "Heavy Oil Residue",
        piped: true,
        isRaw: false,
        handPicked: false,
        default: "plastic",
        recipes: {
            plastic: {
                name: "Plastic",
                machine: "refinery",
                inputs: {
                    crudeOil: {
                        amount: 3,
                        rate: 30
                    }
                },
                outputs: {
                    plastic: {
                        amount: 2,
                        rate: 20
                    },
                    heavyOilResidue: {
                        amount: 1,
                        rate: 10
                    }
                },
                parentRecipe: "heavyOilResidue"
            },
            rubber: {
                name: "Rubber",
                machine: "refinery",
                inputs: {
                    crudeOil: {
                        amount: 3,
                        rate: 30
                    }
                },
                outputs: {
                    rubber: {
                        amount: 2,
                        rate: 20
                    },
                    heavyOilResidue: {
                        amount: 2,
                        rate: 20
                    }
                },
                parentRecipe: "heavyOilResidue"
            },
            unpackagedHeavyOilResidue: {
                name: "Unpackaged Heavy Oil Residue",
                machine: "packager",
                inputs: {
                    packagedHeavyOilResidue: {
                        amount: 2,
                        rate: 20
                    }
                },
                outputs: {
                    heavyOilResidue: {
                        amount: 2,
                        rate: 20
                    },
                    emptyCanister: {
                        amount: 2,
                        rate: 20
                    }
                },
                parentRecipe: "heavyOilResidue"
            },
            altHeavyOilResidue: {
                name: "Unpackaged Heavy Oil Residue",
                machine: "refinery",
                inputs: {
                    crudeOil: {
                        amount: 3,
                        rate: 30
                    }
                },
                outputs: {
                    heavyOilResidue: {
                        amount: 4,
                        rate: 40
                    },
                    polymerResin: {
                        amount: 2,
                        rate: 20
                    }
                },
                parentRecipe: "heavyOilResidue"
            },
            altPolymerResin: {
                name: "Alternate: Polymer Resin",
                machine: "refinery",
                inputs: {
                    crudeOil: {
                        amount: 6,
                        rate: 60
                    }
                },
                outputs: {
                    heavyOilResidue: {
                        amount: 2,
                        rate: 20
                    },
                    polymerResin: {
                        amount: 13,
                        rate: 130
                    }
                },
                parentRecipe: "heavyOilResidue"
            }
        }
    },
    fuel: {
        name: "Fuel",
        piped: true,
        isRaw: false,
        handPicked: false,
        default: "fuel",
        recipes: {
            fuel: {
                name: "Fuel",
                machine: "refinery",
                inputs: {
                    crudeOil: {
                        amount: 6,
                        rate: 60
                    }
                },
                outputs: {
                    fuel: {
                        amount: 4,
                        rate: 40
                    },
                    polymerResin: {
                        amount: 3,
                        rate: 30
                    }
                },
                parentRecipe: "fuel"
            },
            residualFuel: {
                name: "Residual Fuel",
                machine: "refinery",
                inputs: {
                    heavyOilResidue: {
                        amount: 6,
                        rate: 60
                    }
                },
                outputs: {
                    fuel: {
                        amount: 4,
                        rate: 40
                    }
                },
                parentRecipe: "fuel"
            },
            unpackagedFuel: {
                name: "Unpackaged Fuel",
                machine: "packager",
                inputs: {
                    packagedFuel: {
                        amount: 2,
                        rate: 60
                    }
                },
                outputs: {
                    fuel: {
                        amount: 2,
                        rate: 60
                    },
                    emptyCanister: {
                        amount: 2,
                        rate: 60
                    }
                },
                parentRecipe: "fuel"
            },
            altDilutedFuel: {
                name: "Alternate: Diluted Fuel",
                machine: "blender",
                inputs: {
                    heavyOilResidue: {
                        amount: 5,
                        rate: 50
                    },
                    water: {
                        amount: 10,
                        rate: 100
                    }
                },
                outputs: {
                    fuel: {
                        amount: 10,
                        rate: 100
                    }
                },
                parentRecipe: "fuel"
            }
        }
    },
    liquidBiofuel: {
        name: "Liquid Biofuel",
        piped: true,
        isRaw: false,
        handPicked: false,
        default: "liquidBiofuel",
        recipes: {
            liquidBiofuel: {
                name: "Liquid Biofuel",
                machine: "refinery",
                inputs: {
                    solidBiofuel: {
                        amount: 6,
                        rate: 90
                    },
                    water: {
                        amount: 3,
                        rate: 45
                    }
                },
                outputs: {
                    liquidBiofuel: {
                        amount: 4,
                        rate: 60
                    }
                },
                parentRecipe: "liquidBiofuel"
            },
            unpackagedLiquidBiofuel: {
                name: "Unpackaged Liquid Biofuel",
                machine: "packager",
                inputs: {
                    packagedLiquidBiofuel: {
                        amount: 2,
                        rate: 60
                    }
                },
                outputs: {
                    liquidBiofuel: {
                        amount: 2,
                        rate: 60
                    },
                    emptyCanister: {
                        amount: 2,
                        rate: 60
                    }
                },
                parentRecipe: "liquidBiofuel"
            }
        }
    },
    turbofuel: {
        name: "Turbofuel",
        piped: true,
        isRaw: false,
        handPicked: false,
        default: "turbofuel",
        recipes: {
            unpackagedTurbofuel: {
                name: "Unpackaged Turbofuel",
                machine: "packager",
                inputs: {
                    packagedTurbofuel: {
                        amount: 2,
                        rate: 20
                    }
                },
                outputs: {
                    turbofuel: {
                        amount: 2,
                        rate: 20
                    },
                    emptyCanister: {
                        amount: 2,
                        rate: 20
                    }
                },
                parentRecipe: "turbofuel"
            },
            altTurboBlendFuel: {
                name: "Alternate: Turbo Blend Fuel",
                machine: "blender",
                inputs: {
                    fuel: {
                        amount: 2,
                        rate: 15
                    },
                    heavyOilResidue: {
                        amount: 4,
                        rate: 30
                    },
                    sulfur: {
                        amount: 3,
                        rate: 22.5
                    },
                    petroleumCoke: {
                        amount: 3,
                        rate: 22.5
                    }
                },
                outputs: {
                    turbofuel: {
                        amount: 6,
                        rate: 45
                    }
                },
                parentRecipe: "turbofuel"
            },
            altTurboHeavyFuel: {
                name: "Alternate: Turbo Heavy Fuel",
                machine: "refinery",
                inputs: {
                    heavyOilResidue: {
                        amount: 5,
                        rate: 37.5
                    },
                    compactedCoal: {
                        amount: 4,
                        rate: 30
                    }
                },
                outputs: {
                    turbofuel: {
                        amount: 4,
                        rate: 30
                    }
                },
                parentRecipe: "turbofuel"
            },
            turbofuel: {
                name: "Turbofuel",
                machine: "refinery",
                inputs: {
                    fuel: {
                        amount: 6,
                        rate: 22.5
                    },
                    compactedCoal: {
                        amount: 4,
                        rate: 15
                    }
                },
                outputs: {
                    turbofuel: {
                        amount: 5,
                        rate: 18.75
                    }
                },
                parentRecipe: "turbofuel"
            }
        }
    },
    aluminaSolution: {
        name: "Alumina Solution",
        piped: true,
        isRaw: false,
        handPicked: false,
        default: "aluminaSolution",
        recipes: {
            aluminaSolution: {
                name: "Alumina Solution",
                machine: "refinery",
                inputs: {
                    bauxite: {
                        amount: 12,
                        rate: 120
                    },
                    water: {
                        amount: 18,
                        rate: 180
                    }
                },
                outputs: {
                    aluminaSolution: {
                        amount: 12,
                        rate: 120
                    },
                    silica: {
                        amount: 5,
                        rate: 50
                    }
                },
                parentRecipe: "aluminaSolution"
            },
            unpackagedAluminaSolution: {
                name: "Unpackaged Alumina Solution",
                machine: "packager",
                inputs: {
                    packagedAluminaSolution: {
                        amount: 2,
                        rate: 120
                    }
                },
                outputs: {
                    aluminaSolution: {
                        amount: 2,
                        rate: 120
                    },
                    emptyCanister: {
                        amount: 2,
                        rate: 120
                    }
                },
                parentRecipe: "aluminaSolution"
            },
            altSloppyAlumina: {
                name: "Alternate: Sloppy Alumina",
                machine: "refinery",
                inputs: {
                    bauxite: {
                        amount: 10,
                        rate: 200
                    },
                    water: {
                        amount: 10,
                        rate: 200
                    }
                },
                outputs: {
                    aluminaSolution: {
                        amount: 12,
                        rate: 240
                    }
                },
                parentRecipe: "aluminaSolution"
            }
        }
    },
    sulfuricAcid: {
        name: "Sulfuric Acid",
        piped: true,
        isRaw: false,
        handPicked: false,
        default: "sulfuricAcid",
        recipes: {
            encasedUraniumCell: {
                name: "Encased Uranium Cell",
                machine: "blender",
                inputs: {
                    uranium: {
                        amount: 10,
                        rate: 50
                    },
                    concrete: {
                        amount: 3,
                        rate: 15
                    },
                    sulfuricAcid: {
                        amount: 8,
                        rate: 40
                    }
                },
                outputs: {
                    encasedUraniumCell: {
                        amount: 5,
                        rate: 25
                    },
                    sulfuricAcid: {
                        amount: 2,
                        rate: 10
                    }
                },
                parentRecipe: "sulfuricAcid"
            },
            sulfuricAcid: {
                name: "Sulfuric Acid",
                machine: "refinery",
                inputs: {
                    sulfur: {
                        amount: 5,
                        rate: 50
                    },
                    water: {
                        amount: 5,
                        rate: 50
                    }
                },
                outputs: {
                    sulfuricAcid: {
                        amount: 5,
                        rate: 50
                    }
                },
                parentRecipe: "sulfuricAcid"
            },
            unpackagedSulfuricAcid: {
                name: "Unpackaged Sulfuric Acid",
                machine: "packager",
                inputs: {
                    packagedSulfuricAcid: {
                        amount: 1,
                        rate: 60
                    }
                },
                outputs: {
                    sulfuricAcid: {
                        amount: 1,
                        rate: 60
                    },
                    emptyCanister: {
                        amount: 1,
                        rate: 60
                    }
                },
                parentRecipe: "sulfuricAcid"
            }
        }
    },
    nitricAcid: {
        name: "Nitric Acid",
        piped: true,
        isRaw: false,
        handPicked: false,
        default: "nitricAcid",
        recipes: {
            nitricAcid: {
                name: "Nitric Acid",
                machine: "blender",
                inputs: {
                    nitrogenGas: {
                        amount: 12,
                        rate: 120
                    },
                    water: {
                        amount: 3,
                        rate: 30
                    },
                    ironPlate: {
                        amount: 1,
                        rate: 10
                    }
                },
                outputs: {
                    nitricAcid: {
                        amount: 3,
                        rate: 30
                    }
                },
                parentRecipe: "nitricAcid"
            },
            unpackagedNitricAcid: {
                name: "Unpackaged Nitric Acid",
                machine: "packager",
                inputs: {
                    packagedNitricAcid: {
                        amount: 1,
                        rate: 20
                    }
                },
                outputs: {
                    nitricAcid: {
                        amount: 1,
                        rate: 20
                    },
                    emptyFluidTank: {
                        amount: 1,
                        rate: 20
                    }
                },
                parentRecipe: "nitricAcid"
            }
        }
    },
    nitrogenGas: {
        name: "Nitrogen Gas",
        piped: true,
        isRaw: true,
        handPicked: false,
        default: "",
        recipes: {
            unpackagedNitrogenGas: {
                name: "Unpackaged Nitrogen Gas",
                machine: "packager",
                inputs: {
                    packagedNitrogenGas: {
                        amount: 1,
                        rate: 60
                    }
                },
                outputs: {
                    nitrogenGas: {
                        amount: 4,
                        rate: 240
                    },
                    emptyFluidTank: {
                        amount: 1,
                        rate: 60
                    }
                },
                parentRecipe: "nitrogenGas"
            },
            nitrogenGas: {
                name: "Nitrogen Gas",
                machine: "resourceWellExtractor",
                inputs: {},
                outputs: {
                    nitrogenGas: {
                        amount: 1,
                        rate: 60
                    }
                },
                parentRecipe: "nitrogenGas"
            }
        }
    },
    ironRod: {
        name: "Iron Rod",
        piped: false,
        isRaw: false,
        handPicked: false,
        default: "ironRod",
        recipes: {
            ironRod: {
                name: "Iron Rod",
                machine: "constructor",
                inputs: {
                    ironIngot: {
                        amount: 1,
                        rate: 15
                    }
                },
                outputs: {
                    ironRod: {
                        amount: 1,
                        rate: 15
                    }
                },
                parentRecipe: "ironRod"
            },
            altSteelRod: {
                name: "Alternate: Steel Rod",
                machine: "constructor",
                inputs: {
                    steelIngot: {
                        amount: 1,
                        rate: 12
                    }
                },
                outputs: {
                    ironRod: {
                        amount: 4,
                        rate: 48
                    }
                },
                parentRecipe: "ironRod"
            }
        }
    },
    screw: {
        name: "Screw",
        piped: false,
        isRaw: false,
        handPicked: false,
        default: "screw",
        recipes: {
            screw: {
                name: "Screw",
                machine: "constructor",
                inputs: {
                    ironRod: {
                        amount: 1,
                        rate: 10
                    }
                },
                outputs: {
                    screw: {
                        amount: 4,
                        rate: 40
                    }
                },
                parentRecipe: "screw"
            },
            altCastScrew: {
                name: "Alternate: Cast Screw",
                machine: "constructor",
                inputs: {
                    ironIngot: {
                        amount: 5,
                        rate: 12.5
                    }
                },
                outputs: {
                    screw: {
                        amount: 20,
                        rate: 50
                    }
                },
                parentRecipe: "screw"
            },
            altSteelScrew: {
                name: "Alternate: Steel Screw",
                machine: "constructor",
                inputs: {
                    steelBeam: {
                        amount: 1,
                        rate: 5
                    }
                },
                outputs: {
                    screw: {
                        amount: 52,
                        rate: 260
                    }
                },
                parentRecipe: "screw"
            }
        }
    },
    ironPlate: {
        name: "Iron Plate",
        piped: false,
        isRaw: false,
        handPicked: false,
        default: "ironPlate",
        recipes: {
            ironPlate: {
                name: "Iron Plate",
                machine: "constructor",
                inputs: {
                    ironIngot: {
                        amount: 3,
                        rate: 30
                    }
                },
                outputs: {
                    ironPlate: {
                        amount: 2,
                        rate: 20
                    }
                },
                parentRecipe: "ironPlate"
            },
            altCoatedIronPlate: {
                name: "Alternate: Coated Iron Plate",
                machine: "assembler",
                inputs: {
                    ironIngot: {
                        amount: 10,
                        rate: 50
                    },
                    plastic: {
                        amount: 2,
                        rate: 10
                    }
                },
                outputs: {
                    ironPlate: {
                        amount: 15,
                        rate: 75
                    }
                },
                parentRecipe: "ironPlate"
            },
            altSteelCoatedPlate: {
                name: "Alternate: Steel Coated Plate",
                machine: "assembler",
                inputs: {
                    steelIngot: {
                        amount: 3,
                        rate: 7.5
                    },
                    plastic: {
                        amount: 2,
                        rate: 5
                    }
                },
                outputs: {
                    ironPlate: {
                        amount: 18,
                        rate: 45
                    }
                },
                parentRecipe: "ironPlate"
            }
        }
    },
    reinforcedIronPlate: {
        name: "Reinforced Iron Plate",
        piped: false,
        isRaw: false,
        handPicked: false,
        default: "reinforcedIronPlate",
        recipes: {
            reinforcedIronPlate: {
                name: "Reinforced Iron Plate",
                machine: "assembler",
                inputs: {
                    ironPlate: {
                        amount: 6,
                        rate: 30
                    },
                    screw: {
                        amount: 12,
                        rate: 60
                    }
                },
                outputs: {
                    reinforcedIronPlate: {
                        amount: 1,
                        rate: 5
                    }
                },
                parentRecipe: "reinforcedIronPlate"
            },
            altAdheredIronPlate: {
                name: "Alternate: Adhered Iron Plate",
                machine: "assembler",
                inputs: {
                    ironPlate: {
                        amount: 3,
                        rate: 11.25
                    },
                    rubber: {
                        amount: 1,
                        rate: 3.75
                    }
                },
                outputs: {
                    reinforcedIronPlate: {
                        amount: 1,
                        rate: 3.75
                    }
                },
                parentRecipe: "reinforcedIronPlate"
            },
            altBoltedIronPlate: {
                name: "Alternate: Bolted Iron Plate",
                machine: "assembler",
                inputs: {
                    ironPlate: {
                        amount: 18,
                        rate: 90
                    },
                    screw: {
                        amount: 50,
                        rate: 250
                    }
                },
                outputs: {
                    reinforcedIronPlate: {
                        amount: 3,
                        rate: 15
                    }
                },
                parentRecipe: "reinforcedIronPlate"
            },
            altStitchedIronPlate: {
                name: "Alternate: Stitched Iron Plate",
                machine: "assembler",
                inputs: {
                    ironPlate: {
                        amount: 10,
                        rate: 18.75
                    },
                    wire: {
                        amount: 20,
                        rate: 37.5
                    }
                },
                outputs: {
                    reinforcedIronPlate: {
                        amount: 3,
                        rate: 5.63
                    }
                },
                parentRecipe: "reinforcedIronPlate"
            }
        }
    },
    copperSheet: {
        name: "Copper Sheet",
        piped: false,
        isRaw: false,
        handPicked: false,
        default: "copperSheet",
        recipes: {
            copperSheet: {
                name: "Copper Sheet",
                machine: "constructor",
                inputs: {
                    copperIngot: {
                        amount: 2,
                        rate: 20
                    }
                },
                outputs: {
                    copperSheet: {
                        amount: 1,
                        rate: 10
                    }
                },
                parentRecipe: "copperSheet"
            },
            altSteamedCopperSheet: {
                name: "Alternate: Steamed Copper Sheet",
                machine: "refinery",
                inputs: {
                    copperIngot: {
                        amount: 2,
                        rate: 22.5
                    },
                    water: {
                        amount: 3,
                        rate: 22.5
                    }
                },
                outputs: {
                    copperSheet: {
                        amount: 3,
                        rate: 22.5
                    }
                },
                parentRecipe: "copperSheet"
            }
        }
    },
    alcladAluminumSheet: {
        name: "Alclad Aluminum Sheet",
        piped: false,
        isRaw: false,
        handPicked: false,
        default: "alcladAluminumSheet",
        recipes: {
            alcladAluminumSheet: {
                name: "Alclad Aluminum Sheet",
                machine: "assembler",
                inputs: {
                    aluminumIngot: {
                        amount: 3,
                        rate: 30
                    },
                    copperIngot: {
                        amount: 1,
                        rate: 10
                    }
                },
                outputs: {
                    alcladAluminumSheet: {
                        amount: 3,
                        rate: 30
                    }
                },
                parentRecipe: "alcladAluminumSheet"
            }
        }
    },
    aluminumCasing: {
        name: "Aluminum Casing",
        piped: false,
        isRaw: false,
        handPicked: false,
        default: "aluminumCasing",
        recipes: {
            aluminumCasing: {
                name: "Aluminum Casing",
                machine: "constructor",
                inputs: {
                    aluminumIngot: {
                        amount: 3,
                        rate: 90
                    }
                },
                outputs: {
                    aluminumCasing: {
                        amount: 2,
                        rate: 60
                    }
                },
                parentRecipe: "aluminumCasing"
            },
            altAlcladCasing: {
                name: "Alternate: Alclad Casing",
                machine: "assembler",
                inputs: {
                    aluminumIngot: {
                        amount: 20,
                        rate: 150
                    },
                    copperIngot: {
                        amount: 10,
                        rate: 75
                    }
                },
                outputs: {
                    aluminumCasing: {
                        amount: 15,
                        rate: 112.5
                    }
                },
                parentRecipe: "aluminumCasing"
            }
        }
    },
    steelPipe: {
        name: "Steel Pipe",
        piped: false,
        isRaw: false,
        handPicked: false,
        default: "steelPipe",
        recipes: {
            steelPipe: {
                name: "Steel Pipe",
                machine: "constructor",
                inputs: {
                    steelIngot: {
                        amount: 3,
                        rate: 30
                    }
                },
                outputs: {
                    steelPipe: {
                        amount: 2,
                        rate: 20
                    }
                },
                parentRecipe: "steelPipe"
            }
        }
    },
    steelBeam: {
        name: "Steel Beam",
        piped: false,
        isRaw: false,
        handPicked: false,
        default: "steelBeam",
        recipes: {
            steelBeam: {
                name: "Steel Beam",
                machine: "constructor",
                inputs: {
                    steelIngot: {
                        amount: 4,
                        rate: 60
                    }
                },
                outputs: {
                    steelBeam: {
                        amount: 1,
                        rate: 15
                    }
                },
                parentRecipe: "steelBeam"
            }
        }
    },
    encasedIndustrialBeam: {
        name: "Encased Industrial Beam",
        piped: false,
        isRaw: false,
        handPicked: false,
        default: "encasedIndustrialBeam",
        recipes: {
            encasedIndustrialBeam: {
                name: "Encased Industrial Beam",
                machine: "assembler",
                inputs: {
                    steelBeam: {
                        amount: 4,
                        rate: 24
                    },
                    concrete: {
                        amount: 5,
                        rate: 30
                    }
                },
                outputs: {
                    encasedIndustrialBeam: {
                        amount: 1,
                        rate: 6
                    }
                },
                parentRecipe: "encasedIndustrialBeam"
            },
            encasedIndustrialPipe: {
                name: "Alternate: Encased Industrial Pipe",
                machine: "assembler",
                inputs: {
                    steelPipe: {
                        amount: 7,
                        rate: 28
                    },
                    concrete: {
                        amount: 5,
                        rate: 20
                    }
                },
                outputs: {
                    encasedIndustrialBeam: {
                        amount: 1,
                        rate: 4
                    }
                },
                parentRecipe: "encasedIndustrialBeam"
            }
        }
    },
    modularFrame: {
        name: "Modular Frame",
        piped: false,
        isRaw: false,
        handPicked: false,
        default: "modularFrame",
        recipes: {
            modularFrame: {
                name: "Modular Frame",
                machine: "assembler",
                inputs: {
                    reinforcedIronPlate: {
                        amount: 3,
                        rate: 3
                    },
                    ironRod: {
                        amount: 12,
                        rate: 12
                    }
                },
                outputs: {
                    modularFrame: {
                        amount: 2,
                        rate: 2
                    }
                },
                parentRecipe: "modularFrame"
            },
            altBoltedFrame: {
                name: "Alternate: Bolted Frame",
                machine: "assembler",
                inputs: {
                    reinforcedIronPlate: {
                        amount: 3,
                        rate: 7.5
                    },
                    screw: {
                        amount: 56,
                        rate: 140
                    }
                },
                outputs: {
                    modularFrame: {
                        amount: 2,
                        rate: 5
                    }
                },
                parentRecipe: "modularFrame"
            },
            altSteeledFrame: {
                name: "Alternate: Steeled Frame",
                machine: "assembler",
                inputs: {
                    reinforcedIronPlate: {
                        amount: 2,
                        rate: 2
                    },
                    steelPipe: {
                        amount: 10,
                        rate: 10
                    }
                },
                outputs: {
                    modularFrame: {
                        amount: 3,
                        rate: 3
                    }
                },
                parentRecipe: "modularFrame"
            }
        }
    },
    heavyModularFrame: {
        name: "Heavy Modular Frame",
        piped: false,
        isRaw: false,
        handPicked: false,
        default: "heavyModularFrame",
        recipes: {
            heavyModularFrame: {
                name: "Heavy Modular Frame",
                machine: "manufacturer",
                inputs: {
                    modularFrame: {
                        amount: 5,
                        rate: 10
                    },
                    steelPipe: {
                        amount: 15,
                        rate: 30
                    },
                    encasedIndustrialBeam: {
                        amount: 5,
                        rate: 10
                    },
                    screw: {
                        amount: 100,
                        rate: 200
                    }
                },
                outputs: {
                    heavyModularFrame: {
                        amount: 1,
                        rate: 2
                    }
                },
                parentRecipe: "heavyModularFrame"
            },
            altHeavyEncasedFrame: {
                name: "Alternate: Heavy Encased Frame",
                machine: "manufacturer",
                inputs: {
                    modularFrame: {
                        amount: 8,
                        rate: 7.5
                    },
                    encasedIndustrialBeam: {
                        amount: 10,
                        rate: 9.38
                    },
                    steelPipe: {
                        amount: 36,
                        rate: 33.75
                    },
                    concrete: {
                        amount: 22,
                        rate: 20.63
                    }
                },
                outputs: {
                    heavyModularFrame: {
                        amount: 3,
                        rate: 2.81
                    }
                },
                parentRecipe: "heavyModularFrame"
            },
            altHeavyFlexibleFrame: {
                name: "Alternate: Heavy Flexible Frame",
                machine: "manufacturer",
                inputs: {
                    modularFrame: {
                        amount: 5,
                        rate: 18.75
                    },
                    encasedIndustrialBeam: {
                        amount: 3,
                        rate: 11.25
                    },
                    rubber: {
                        amount: 20,
                        rate: 75
                    },
                    screw: {
                        amount: 104,
                        rate: 390
                    }
                },
                outputs: {
                    heavyModularFrame: {
                        amount: 1,
                        rate: 3.75
                    }
                },
                parentRecipe: "heavyModularFrame"
            }
        }
    },
    fusedModularFrame: {
        name: "Fused Modular Frame",
        piped: false,
        isRaw: false,
        handPicked: false,
        default: "fusedModularFrame",
        recipes: {
            fusedModularFrame: {
                name: "Fused Modular Frame",
                machine: "blender",
                inputs: {
                    heavyModularFrame: {
                        amount: 1,
                        rate: 1.5
                    },
                    aluminumCasing: {
                        amount: 50,
                        rate: 75
                    },
                    nitrogenGas: {
                        amount: 25,
                        rate: 37.5
                    }
                },
                outputs: {
                    fusedModularFrame: {
                        amount: 1,
                        rate: 1.5
                    }
                },
                parentRecipe: "fusedModularFrame"
            },
            altHeatFusedFrame: {
                name: "Alternate: Heat-Fused Frame",
                machine: "blender",
                inputs: {
                    heavyModularFrame: {
                        amount: 1,
                        rate: 3
                    },
                    aluminumIngot: {
                        amount: 50,
                        rate: 150
                    },
                    nitricAcid: {
                        amount: 8,
                        rate: 24
                    },
                    fuel: {
                        amount: 10,
                        rate: 30
                    }
                },
                outputs: {
                    fusedModularFrame: {
                        amount: 1,
                        rate: 3
                    }
                },
                parentRecipe: "fusedModularFrame"
            }
        }
    },
    fabric: {
        name: "Fabric",
        piped: false,
        isRaw: false,
        handPicked: false,
        default: "fabric",
        recipes: {
            fabric: {
                name: "Fabric",
                machine: "assembler",
                inputs: {
                    mycelia: {
                        amount: 1,
                        rate: 15
                    },
                    biomass: {
                        amount: 5,
                        rate: 75
                    }
                },
                outputs: {
                    fabric: {
                        amount: 1,
                        rate: 15
                    }
                },
                parentRecipe: "fabric"
            },
            altPolyesterFabric: {
                name: "Alternate: Polyester Fabric",
                machine: "refinery",
                inputs: {
                    polymerResin: {
                        amount: 1,
                        rate: 30
                    },
                    water: {
                        amount: 1,
                        rate: 30
                    }
                },
                outputs: {
                    fabric: {
                        amount: 1,
                        rate: 30
                    }
                },
                parentRecipe: "fabric"
            }
        }
    },
    plastic: {
        name: "Plastic",
        piped: false,
        isRaw: false,
        handPicked: false,
        default: "plastic",
        recipes: {
            plastic: {
                name: "Plastic",
                machine: "refinery",
                inputs: {
                    crudeOil: {
                        amount: 3,
                        rate: 30
                    }
                },
                outputs: {
                    plastic: {
                        amount: 2,
                        rate: 20
                    },
                    heavyOilResidue: {
                        amount: 1,
                        rate: 10
                    }
                },
                parentRecipe: "plastic"
            },
            residualPlastic: {
                name: "Residual Plastic",
                machine: "refinery",
                inputs: {
                    polymerResin: {
                        amount: 6,
                        rate: 60
                    },
                    water: {
                        amount: 2,
                        rate: 20
                    }
                },
                outputs: {
                    plastic: {
                        amount: 2,
                        rate: 20
                    }
                },
                parentRecipe: "plastic"
            },
            altRecycledPlastic: {
                name: "Alternate: Residual Plastic",
                machine: "refinery",
                inputs: {
                    rubber: {
                        amount: 6,
                        rate: 30
                    },
                    fuel: {
                        amount: 6,
                        rate: 30
                    }
                },
                outputs: {
                    plastic: {
                        amount: 12,
                        rate: 60
                    }
                },
                parentRecipe: "plastic"
            }
        }
    },
    rubber: {
        name: "Rubber",
        piped: false,
        isRaw: false,
        handPicked: false,
        default: "rubber",
        recipes: {
            residualRubber: {
                name: "Residual Rubber",
                machine: "refinery",
                inputs: {
                    polymerResin: {
                        amount: 4,
                        rate: 40
                    },
                    water: {
                        amount: 4,
                        rate: 40
                    }
                },
                outputs: {
                    rubber: {
                        amount: 2,
                        rate: 20
                    }
                },
                parentRecipe: "rubber"
            },
            rubber: {
                name: "Rubber",
                machine: "refinery",
                inputs: {
                    crudeOil: {
                        amount: 3,
                        rate: 30
                    }
                },
                outputs: {
                    rubber: {
                        amount: 2,
                        rate: 20
                    },
                    heavyOilResidue: {
                        amount: 2,
                        rate: 20
                    }
                },
                parentRecipe: "rubber"
            },
            altRecycledRubber: {
                name: "Alternate: Residual Rubber",
                machine: "refinery",
                inputs: {
                    plastic: {
                        amount: 6,
                        rate: 30
                    },
                    fuel: {
                        amount: 6,
                        rate: 30
                    }
                },
                outputs: {
                    rubber: {
                        amount: 12,
                        rate: 60
                    }
                },
                parentRecipe: "rubber"
            }
        }
    },
    rotor: {
        name: "Rotor",
        piped: false,
        isRaw: false,
        handPicked: false,
        default: "rotor",
        recipes: {
            rotor: {
                name: "Rotor",
                machine: "assembler",
                inputs: {
                    ironRod: {
                        amount: 5,
                        rate: 20
                    },
                    screw: {
                        amount: 25,
                        rate: 100
                    }
                },
                outputs: {
                    rotor: {
                        amount: 1,
                        rate: 4
                    }
                },
                parentRecipe: "rotor"
            },
            altCopperRotor: {
                name: "Alternate: Copper Rotor",
                machine: "assembler",
                inputs: {
                    copperSheet: {
                        amount: 6,
                        rate: 22.5
                    },
                    screw: {
                        amount: 52,
                        rate: 195
                    }
                },
                outputs: {
                    rotor: {
                        amount: 3,
                        rate: 11.25
                    }
                },
                parentRecipe: "rotor"
            },
            altSteelRotor: {
                name: "Alternate: Steel Rotor",
                machine: "assembler",
                inputs: {
                    steelPipe: {
                        amount: 2,
                        rate: 10
                    },
                    wire: {
                        amount: 6,
                        rate: 30
                    }
                },
                outputs: {
                    rotor: {
                        amount: 1,
                        rate: 5
                    }
                },
                parentRecipe: "rotor"
            }
        }
    },
    stator: {
        name: "Stator",
        piped: false,
        isRaw: false,
        handPicked: false,
        default: "stator",
        recipes: {
            stator: {
                name: "Stator",
                machine: "assembler",
                inputs: {
                    steelPipe: {
                        amount: 3,
                        rate: 15
                    },
                    wire: {
                        amount: 8,
                        rate: 40
                    }
                },
                outputs: {
                    stator: {
                        amount: 1,
                        rate: 5
                    }
                },
                parentRecipe: "stator"
            },
            altQuickwireStator: {
                name: "Alternate: Quickwire Stator",
                machine: "assembler",
                inputs: {
                    steelPipe: {
                        amount: 4,
                        rate: 16
                    },
                    quickwire: {
                        amount: 15,
                        rate: 60
                    }
                },
                outputs: {
                    stator: {
                        amount: 2,
                        rate: 8
                    }
                },
                parentRecipe: "stator"
            }
        }
    },
    battery: {
        name: "Battery",
        piped: false,
        isRaw: false,
        handPicked: false,
        default: "battery",
        recipes: {
            battery: {
                name: "Battery",
                machine: "blender",
                inputs: {
                    sulfuricAcid: {
                        amount: 2.5,
                        rate: 50
                    },
                    aluminaSolution: {
                        amount: 2,
                        rate: 40
                    },
                    aluminumCasing: {
                        amount: 1,
                        rate: 20
                    }
                },
                outputs: {
                    battery: {
                        amount: 1,
                        rate: 20
                    },
                    water: {
                        amount: 1.5,
                        rate: 30
                    }
                },
                parentRecipe: "battery"
            },
            altClassicBattery: {
                name: "Alternate: Classic Battery",
                machine: "manufacturer",
                inputs: {
                    sulfur: {
                        amount: 6,
                        rate: 45
                    },
                    alcladAluminumSheet: {
                        amount: 7,
                        rate: 52.5
                    },
                    plastic: {
                        amount: 8,
                        rate: 60
                    },
                    wire: {
                        amount: 12,
                        rate: 90
                    }
                },
                outputs: {
                    battery: {
                        amount: 4,
                        rate: 30
                    }
                },
                parentRecipe: "battery"
            }
        }
    },
    motor: {
        name: "Motor",
        piped: false,
        isRaw: false,
        handPicked: false,
        default: "motor",
        recipes: {
            motor: {
                name: "Motor",
                machine: "assembler",
                inputs: {
                    rotor: {
                        amount: 2,
                        rate: 10
                    },
                    stator: {
                        amount: 2,
                        rate: 10
                    }
                },
                outputs: {
                    motor: {
                        amount: 1,
                        rate: 5
                    }
                },
                parentRecipe: "motor"
            },
            altElectricMotor: {
                name: "Alternate: Electric Motor",
                machine: "assembler",
                inputs: {
                    electromagneticControlRod: {
                        amount: 1,
                        rate: 3.75
                    },
                    rotor: {
                        amount: 2,
                        rate: 7.5
                    }
                },
                outputs: {
                    motor: {
                        amount: 2,
                        rate: 7.5
                    }
                },
                parentRecipe: "motor"
            },
            altRigourMotor: {
                name: "Alternate: Rigour Motor",
                machine: "manufacturer",
                inputs: {
                    rotor: {
                        amount: 3,
                        rate: 3.75
                    },
                    stator: {
                        amount: 3,
                        rate: 3.5
                    },
                    crystalOscillator: {
                        amount: 1,
                        rate: 1.25
                    }
                },
                outputs: {
                    motor: {
                        amount: 6,
                        rate: 7.5
                    }
                },
                parentRecipe: "motor"
            }
        }
    },
    heatSink: {
        name: "Heat Sink",
        piped: false,
        isRaw: false,
        handPicked: false,
        default: "heatSink",
        recipes: {
            heatSink: {
                name: "Heat Sink",
                machine: "assembler",
                inputs: {
                    alcladAluminumSheet: {
                        amount: 5,
                        rate: 37.5
                    },
                    copperSheet: {
                        amount: 3,
                        rate: 22.5
                    }
                },
                outputs: {
                    heatSink: {
                        amount: 1,
                        rate: 7.5
                    }
                },
                parentRecipe: "heatSink"
            },
            altHeatExchanger: {
                name: "Alternate: Heat Exchanger",
                machine: "assembler",
                inputs: {
                    aluminumCasing: {
                        amount: 3,
                        rate: 30
                    },
                    rubber: {
                        amount: 3,
                        rate: 30
                    }
                },
                outputs: {
                    heatSink: {
                        amount: 1,
                        rate: 10
                    }
                },
                parentRecipe: "heatSink"
            }
        }
    },
    coolingSystem: {
        name: "Cooling System",
        piped: false,
        isRaw: false,
        handPicked: false,
        default: "coolingSystem",
        recipes: {
            coolingSystem: {
                name: "Cooling System",
                machine: "blender",
                inputs: {
                    heatSink: {
                        amount: 2,
                        rate: 12
                    },
                    rubber: {
                        amount: 2,
                        rate: 12
                    },
                    water: {
                        amount: 5,
                        rate: 30
                    },
                    nitrogenGas: {
                        amount: 25,
                        rate: 150
                    }
                },
                outputs: {
                    coolingSystem: {
                        amount: 1,
                        rate: 6
                    }
                },
                parentRecipe: "coolingSystem"
            },
            altCoolingDevice: {
                name: "Alternate: Cooling Device",
                machine: "blender",
                inputs: {
                    heatSink: {
                        amount: 5,
                        rate: 9.38
                    },
                    motor: {
                        amount: 1,
                        rate: 1.88
                    },
                    nitrogenGas: {
                        amount: 24,
                        rate: 45
                    }
                },
                outputs: {
                    coolingSystem: {
                        amount: 2,
                        rate: 3.75
                    }
                },
                parentRecipe: "coolingSystem"
            }
        }
    },
    turboMotor: {
        name: "Turbo Motor",
        piped: false,
        isRaw: false,
        handPicked: false,
        default: "turboMotor",
        recipes: {
            turboMotor: {
                name: "Turbo Motor",
                machine: "manufacturer",
                inputs: {
                    coolingSystem: {
                        amount: 4,
                        rate: 7.5
                    },
                    radioControlUnit: {
                        amount: 2,
                        rate: 3.75
                    },
                    motor: {
                        amount: 4,
                        rate: 7.5
                    },
                    rubber: {
                        amount: 24,
                        rate: 45
                    }
                },
                outputs: {
                    turboMotor: {
                        amount: 1,
                        rate: 1.88
                    }
                },
                parentRecipe: "turboMotor"
            },
            altTurboElectricMotor: {
                name: "Alternate: Turbo Electric Motor",
                machine: "manufacturer",
                inputs: {
                    motor: {
                        amount: 7,
                        rate: 6.56
                    },
                    radioControlUnit: {
                        amount: 9,
                        rate: 8.44
                    },
                    electromagneticControlRod: {
                        amount: 5,
                        rate: 4.69
                    },
                    rotor: {
                        amount: 7,
                        rate: 6.56
                    }
                },
                outputs: {
                    turboMotor: {
                        amount: 3,
                        rate: 2.81
                    }
                },
                parentRecipe: "turboMotor"
            },
            altTurboPressureMotor: {
                name: "Alternate: Turbo Pressure Motor",
                machine: "manufacturer",
                inputs: {
                    motor: {
                        amount: 4,
                        rate: 7.5
                    },
                    pressureConversionCube: {
                        amount: 1,
                        rate: 1.88
                    },
                    packagedNitrogenGas: {
                        amount: 24,
                        rate: 45
                    },
                    stator: {
                        amount: 8,
                        rate: 15
                    }
                },
                outputs: {
                    turboMotor: {
                        amount: 2,
                        rate: 3.75
                    }
                },
                parentRecipe: "turboMotor"
            }
        }
    },
    wire: {
        name: "Wire",
        piped: false,
        isRaw: false,
        handPicked: false,
        default: "wire",
        recipes: {
            wire: {
                name: "Wire",
                machine: "constructor",
                inputs: {
                    copperIngot: {
                        amount: 1,
                        rate: 15
                    }
                },
                outputs: {
                    wire: {
                        amount: 2,
                        rate: 30
                    }
                },
                parentRecipe: "wire"
            },
            altCateriumWire: {
                name: "Alternate: Caterium Wire",
                machine: "constructor",
                inputs: {
                    cateriumIngot: {
                        amount: 1,
                        rate: 15
                    }
                },
                outputs: {
                    wire: {
                        amount: 8,
                        rate: 120
                    }
                },
                parentRecipe: "wire"
            },
            altFusedWire: {
                name: "Alternate: Fused Wire",
                machine: "assembler",
                inputs: {
                    copperIngot: {
                        amount: 4,
                        rate: 12
                    },
                    cateriumIngot: {
                        amount: 1,
                        rate: 3
                    }
                },
                outputs: {
                    wire: {
                        amount: 30,
                        rate: 90
                    }
                },
                parentRecipe: "wire"
            },
            altIronWire: {
                name: "Alternate: Iron Wire",
                machine: "constructor",
                inputs: {
                    ironIngot: {
                        amount: 5,
                        rate: 12.5
                    }
                },
                outputs: {
                    wire: {
                        amount: 9,
                        rate: 22.5
                    }
                },
                parentRecipe: "wire"
            }
        }
    },
    cable: {
        name: "Cable",
        piped: false,
        isRaw: false,
        handPicked: false,
        default: "cable",
        recipes: {
            cable: {
                name: "Cable",
                machine: "constructor",
                inputs: {
                    wire: {
                        amount: 2,
                        rate: 60
                    }
                },
                outputs: {
                    cable: {
                        amount: 1,
                        rate: 30
                    }
                },
                parentRecipe: "cable"
            },
            altCoatedCable: {
                name: "Alternate: Coated Cable",
                machine: "refinery",
                inputs: {
                    wire: {
                        amount: 5,
                        rate: 37.5
                    },
                    heavyOilResidue: {
                        amount: 2,
                        rate: 15
                    }
                },
                outputs: {
                    cable: {
                        amount: 9,
                        rate: 67.5
                    }
                },
                parentRecipe: "cable"
            },
            altInsulatedCable: {
                name: "Alternate: Insulated Cable",
                machine: "assembler",
                inputs: {
                    wire: {
                        amount: 9,
                        rate: 45
                    },
                    rubber: {
                        amount: 6,
                        rate: 30
                    }
                },
                outputs: {
                    cable: {
                        amount: 20,
                        rate: 100
                    }
                },
                parentRecipe: "cable"
            },
            altQuickwireCable: {
                name: "Alternate: Quickwire Cable",
                machine: "assembler",
                inputs: {
                    quickwire: {
                        amount: 3,
                        rate: 7.5
                    },
                    rubber: {
                        amount: 2,
                        rate: 5
                    }
                },
                outputs: {
                    cable: {
                        amount: 11,
                        rate: 27.5
                    }
                },
                parentRecipe: "cable"
            }
        }
    },
    quickwire: {
        name: "Quickwire",
        piped: false,
        isRaw: false,
        handPicked: false,
        default: "quickwire",
        recipes: {
            quickwire: {
                name: "Quickwire",
                machine: "constructor",
                inputs: {
                    cateriumIngot: {
                        amount: 1,
                        rate: 12
                    }
                },
                outputs: {
                    quickwire: {
                        amount: 5,
                        rate: 60
                    }
                },
                parentRecipe: "quickwire"
            },
            altFusedQuickwire: {
                name: "Alternate: Fused Quickwire",
                machine: "assembler",
                inputs: {
                    cateriumIngot: {
                        amount: 1,
                        rate: 7.5
                    },
                    copperIngot: {
                        amount: 5,
                        rate: 37.5
                    }
                },
                outputs: {
                    quickwire: {
                        amount: 12,
                        rate: 90
                    }
                },
                parentRecipe: "quickwire"
            }
        }
    },
    circuitBoard: {
        name: "Circuit Board",
        piped: false,
        isRaw: false,
        handPicked: false,
        default: "circuitBoard",
        recipes: {
            circuitBoard: {
                name: "Circuit Board",
                machine: "assembler",
                inputs: {
                    copperSheet: {
                        amount: 2,
                        rate: 15
                    },
                    plastic: {
                        amount: 4,
                        rate: 30
                    }
                },
                outputs: {
                    circuitBoard: {
                        amount: 1,
                        rate: 7.5
                    }
                },
                parentRecipe: "circuitBoard"
            },
            altCateriumCircuitBoard: {
                name: "Alternate: Caterium Circuit Board",
                machine: "assembler",
                inputs: {
                    plastic: {
                        amount: 10,
                        rate: 12.5
                    },
                    quickwire: {
                        amount: 30,
                        rate: 37.5
                    }
                },
                outputs: {
                    circuitBoard: {
                        amount: 7,
                        rate: 8.75
                    }
                },
                parentRecipe: "circuitBoard"
            },
            altElectrodeCircuitBoard: {
                name: "Alternate: Electrode Circuit Board",
                machine: "assembler",
                inputs: {
                    rubber: {
                        amount: 6,
                        rate: 30
                    },
                    petroleumCoke: {
                        amount: 9,
                        rate: 45
                    }
                },
                outputs: {
                    circuitBoard: {
                        amount: 1,
                        rate: 5
                    }
                },
                parentRecipe: "circuitBoard"
            },
            altSiliconCircuitBoard: {
                name: "Alternate: Silicon Circuit Board",
                machine: "assembler",
                inputs: {
                    copperSheet: {
                        amount: 11,
                        rate: 27.5
                    },
                    silica: {
                        amount: 11,
                        rate: 27.5
                    }
                },
                outputs: {
                    circuitBoard: {
                        amount: 5,
                        rate: 12.5
                    }
                },
                parentRecipe: "circuitBoard"
            }
        }
    },
    aiLimiter: {
        name: "AI Limiter",
        piped: false,
        isRaw: false,
        handPicked: false,
        default: "aiLimiter",
        recipes: {
            aiLimiter: {
                name: "AI Limiter",
                machine: "assembler",
                inputs: {
                    copperSheet: {
                        amount: 5,
                        rate: 25
                    },
                    quickwire: {
                        amount: 20,
                        rate: 100
                    }
                },
                outputs: {
                    aiLimiter: {
                        amount: 1,
                        rate: 5
                    }
                },
                parentRecipe: "aiLimiter"
            }
        }
    },
    highSpeedConnector: {
        name: "High-Speed Connector",
        piped: false,
        isRaw: false,
        handPicked: false,
        default: "highSpeedConnector",
        recipes: {
            highSpeedConnector: {
                name: "High-Speed Connector",
                machine: "manufacturer",
                inputs: {
                    quickwire: {
                        amount: 56,
                        rate: 210
                    },
                    cable: {
                        amount: 10,
                        rate: 37.5
                    },
                    circuitBoard: {
                        amount: 1,
                        rate: 3.75
                    }
                },
                outputs: {
                    highSpeedConnector: {
                        amount: 1,
                        rate: 3.75
                    }
                },
                parentRecipe: "highSpeedConnector"
            },
            altSiliconHighSpeedConnector: {
                name: "Alternate: Silicon High-Speed Connector",
                machine: "manufacturer",
                inputs: {
                    quickwire: {
                        amount: 60,
                        rate: 90
                    },
                    silica: {
                        amount: 25,
                        rate: 37.5
                    },
                    circuitBoard: {
                        amount: 2,
                        rate: 3
                    }
                },
                outputs: {
                    highSpeedConnector: {
                        amount: 2,
                        rate: 3
                    }
                },
                parentRecipe: "highSpeedConnector"
            }
        }
    },
    computer: {
        name: "Computer",
        piped: false,
        isRaw: false,
        handPicked: false,
        default: "computer",
        recipes: {
            computer: {
                name: "Computer",
                machine: "manufacturer",
                inputs: {
                    circuitBoard: {
                        amount: 10,
                        rate: 25
                    },
                    cable: {
                        amount: 9,
                        rate: 22.5
                    },
                    plastic: {
                        amount: 18,
                        rate: 45
                    },
                    screw: {
                        amount: 52,
                        rate: 130
                    }
                },
                outputs: {
                    computer: {
                        amount: 1,
                        rate: 2.5
                    }
                },
                parentRecipe: "computer"
            },
            altCateriumComputer: {
                name: "Alternate: Caterium Computer",
                machine: "manufacturer",
                inputs: {
                    circuitBoard: {
                        amount: 7,
                        rate: 26.25
                    },
                    quickwire: {
                        amount: 28,
                        rate: 105
                    },
                    rubber: {
                        amount: 12,
                        rate: 45
                    }
                },
                outputs: {
                    computer: {
                        amount: 1,
                        rate: 3.75
                    }
                },
                parentRecipe: "computer"
            },
            altCrystalComputer: {
                name: "Alternate: Crystal Computer",
                machine: "assembler",
                inputs: {
                    circuitBoard: {
                        amount: 8,
                        rate: 7.5
                    },
                    crystalOscillator: {
                        amount: 3,
                        rate: 2.81
                    }
                },
                outputs: {
                    computer: {
                        amount: 3,
                        rate: 2.81
                    }
                },
                parentRecipe: "computer"
            }
        }
    },
    supercomputer: {
        name: "Supercomputer",
        piped: false,
        isRaw: false,
        handPicked: false,
        default: "supercomputer",
        recipes: {
            supercomputer: {
                name: "Supercomputer",
                machine: "manufacturer",
                inputs: {
                    computer: {
                        amount: 2,
                        rate: 3.75
                    },
                    aiLimiter: {
                        amount: 2,
                        rate: 3.75
                    },
                    highSpeedConnector: {
                        amount: 3,
                        rate: 5.63
                    },
                    plastic: {
                        amount: 26,
                        rate: 52.5
                    }
                },
                outputs: {
                    supercomputer: {
                        amount: 1,
                        rate: 1.88
                    }
                },
                parentRecipe: "supercomputer"
            },
            altOCSupercomputer: {
                name: "Alternate: OC Supercomputer",
                machine: "assembler",
                inputs: {
                    radioControlUnit: {
                        amount: 3,
                        rate: 9
                    },
                    coolingSystem: {
                        amount: 3,
                        rate: 9
                    }
                },
                outputs: {
                    supercomputer: {
                        amount: 1,
                        rate: 3
                    }
                },
                parentRecipe: "supercomputer"
            },
            altSuperStateComputer: {
                name: "Alternate: Super-State Computer",
                machine: "manufacturer",
                inputs: {
                    computer: {
                        amount: 3,
                        rate: 3.6
                    },
                    electromagneticControlRod: {
                        amount: 2,
                        rate: 2.4
                    },
                    battery: {
                        amount: 20,
                        rate: 24
                    },
                    wire: {
                        amount: 45,
                        rate: 54
                    }
                },
                outputs: {
                    supercomputer: {
                        amount: 2,
                        rate: 2.4
                    }
                },
                parentRecipe: "supercomputer"
            }
        }
    },
    radioControlUnit: {
        name: "Radio Control Unit",
        piped: false,
        isRaw: false,
        handPicked: false,
        default: "radioControlUnit",
        recipes: {
            radioControlUnit: {
                name: "Radio Control Unit",
                machine: "manufacturer",
                inputs: {
                    aluminumCasing: {
                        amount: 32,
                        rate: 40
                    },
                    crystalOscillator: {
                        amount: 1,
                        rate: 1.25
                    },
                    computer: {
                        amount: 1,
                        rate: 1.25
                    }
                },
                outputs: {
                    radioControlUnit: {
                        amount: 2,
                        rate: 2.5
                    }
                },
                parentRecipe: "radioControlUnit"
            },
            altRadioConnectionUnit: {
                name: "Alternate: Radio Connection Unit",
                machine: "manufacturer",
                inputs: {
                    heatSink: {
                        amount: 4,
                        rate: 15
                    },
                    highSpeedConnector: {
                        amount: 2,
                        rate: 7.5
                    },
                    quartzCrystal: {
                        amount: 12,
                        rate: 45
                    }
                },
                outputs: {
                    radioControlUnit: {
                        amount: 1,
                        rate: 3.75
                    }
                },
                parentRecipe: "radioControlUnit"
            },
            altRadioControlSystem: {
                name: "Alternate: Radio Control System",
                machine: "manufacturer",
                inputs: {
                    crystalOscillator: {
                        amount: 1,
                        rate: 1.5
                    },
                    circuitBoard: {
                        amount: 10,
                        rate: 15
                    },
                    aluminumCasing: {
                        amount: 60,
                        rate: 90
                    },
                    rubber: {
                        amount: 30,
                        rate: 45
                    }
                },
                outputs: {
                    radioControlUnit: {
                        amount: 3,
                        rate: 4.5
                    }
                },
                parentRecipe: "radioControlUnit"
            }
        }
    },
    crystalOscillator: {
        name: "Crystal Oscillator",
        piped: false,
        isRaw: false,
        handPicked: false,
        default: "crystalOscillator",
        recipes: {
            crystalOscillator: {
                name: "Crystal Oscillator",
                machine: "manufacturer",
                inputs: {
                    quartzCrystal: {
                        amount: 36,
                        rate: 18
                    },
                    cable: {
                        amount: 28,
                        rate: 14
                    },
                    reinforcedIronPlate: {
                        amount: 5,
                        rate: 2.5
                    }
                },
                outputs: {
                    crystalOscillator: {
                        amount: 2,
                        rate: 1
                    }
                },
                parentRecipe: "crystalOscillator"
            },
            altInsulatedCrystalOscillator: {
                name: "Alternate: Insulated Crystal Oscillator",
                machine: "manufacturer",
                inputs: {
                    quartzCrystal: {
                        amount: 10,
                        rate: 18.75
                    },
                    rubber: {
                        amount: 7,
                        rate: 13.13
                    },
                    aiLimiter: {
                        amount: 1,
                        rate: 1.88
                    }
                },
                outputs: {
                    crystalOscillator: {
                        amount: 1,
                        rate: 1.88
                    }
                },
                parentRecipe: "crystalOscillator"
            }
        }
    },
    emptyCanister: {
        name: "Empty Canister",
        piped: false,
        isRaw: false,
        handPicked: false,
        default: "emptyCanister",
        recipes: {
            emptyCanister: {
                name: "Empty Canister",
                machine: "constructor",
                inputs: {
                    plastic: {
                        amount: 2,
                        rate: 30
                    }
                },
                outputs: {
                    emptyCanister: {
                        amount: 4,
                        rate: 60
                    }
                },
                parentRecipe: "emptyCanister"
            },
            altCoatedIronCanister: {
                name: "Alternate: Coated Iron Canister",
                machine: "assembler",
                inputs: {
                    ironPlate: {
                        amount: 2,
                        rate: 30
                    },
                    copperSheet: {
                        amount: 1,
                        rate: 15
                    }
                },
                outputs: {
                    emptyCanister: {
                        amount: 4,
                        rate: 60
                    }
                },
                parentRecipe: "emptyCanister"
            },
            altSteelCanister: {
                name: "Alternate: Steel Canister",
                machine: "constructor",
                inputs: {
                    steelIngot: {
                        amount: 3,
                        rate: 60
                    }
                },
                outputs: {
                    emptyCanister: {
                        amount: 2,
                        rate: 40
                    }
                },
                parentRecipe: "emptyCanister"
            },
            unpackagedAluminaSolution: {
                name: "Unpackaged Alumina Solution",
                machine: "packager",
                inputs: {
                    packagedAluminaSolution: {
                        amount: 2,
                        rate: 120
                    }
                },
                outputs: {
                    aluminaSolution: {
                        amount: 2,
                        rate: 120
                    },
                    emptyCanister: {
                        amount: 2,
                        rate: 120
                    }
                },
                parentRecipe: "emptyCanister"
            },
            unpackagedFuel: {
                name: "Unpackaged Fuel",
                machine: "packager",
                inputs: {
                    packagedFuel: {
                        amount: 2,
                        rate: 60
                    }
                },
                outputs: {
                    fuel: {
                        amount: 2,
                        rate: 60
                    },
                    emptyCanister: {
                        amount: 2,
                        rate: 60
                    }
                },
                parentRecipe: "emptyCanister"
            },
            unpackagedHeavyOilResidue: {
                name: "Unpackaged Heavy Oil Residue",
                machine: "packager",
                inputs: {
                    packagedHeavyOilResidue: {
                        amount: 2,
                        rate: 20
                    }
                },
                outputs: {
                    heavyOilResidue: {
                        amount: 2,
                        rate: 20
                    },
                    emptyCanister: {
                        amount: 2,
                        rate: 20
                    }
                },
                parentRecipe: "emptyCanister"
            },
            unpackagedLiquidBiofuel: {
                name: "Unpackaged Liquid Biofuel",
                machine: "packager",
                inputs: {
                    packagedLiquidBiofuel: {
                        amount: 2,
                        rate: 60
                    }
                },
                outputs: {
                    liquidBiofuel: {
                        amount: 2,
                        rate: 60
                    },
                    emptyCanister: {
                        amount: 2,
                        rate: 60
                    }
                },
                parentRecipe: "emptyCanister"
            },
            unpackagedOil: {
                name: "Unpackaged Oil",
                machine: "packager",
                inputs: {
                    packagedOil: {
                        amount: 2,
                        rate: 60
                    }
                },
                outputs: {
                    crudeOil: {
                        amount: 2,
                        rate: 60
                    },
                    emptyCanister: {
                        amount: 2,
                        rate: 60
                    }
                },
                parentRecipe: "emptyCanister"
            },
            unpackagedSulfuricAcid: {
                name: "Unpackaged Sulfuric Acid",
                machine: "packager",
                inputs: {
                    packagedSulfuricAcid: {
                        amount: 1,
                        rate: 60
                    }
                },
                outputs: {
                    sulfuricAcid: {
                        amount: 1,
                        rate: 60
                    },
                    emptyCanister: {
                        amount: 1,
                        rate: 60
                    }
                },
                parentRecipe: "emptyCanister"
            },
            unpackagedTurbofuel: {
                name: "Unpackaged Turbofuel",
                machine: "packager",
                inputs: {
                    packagedTurbofuel: {
                        amount: 2,
                        rate: 20
                    }
                },
                outputs: {
                    turbofuel: {
                        amount: 2,
                        rate: 20
                    },
                    emptyCanister: {
                        amount: 2,
                        rate: 20
                    }
                },
                parentRecipe: "emptyCanister"
            },
            unpackagedWater: {
                name: "Unpackaged Water",
                machine: "packager",
                inputs: {
                    packagedWater: {
                        amount: 2,
                        rate: 120
                    }
                },
                outputs: {
                    water: {
                        amount: 2,
                        rate: 120
                    },
                    emptyCanister: {
                        amount: 2,
                        rate: 120
                    }
                },
                parentRecipe: "emptyCanister"
            }
        }
    },
    emptyFluidTank: {
        name: "Empty Fluid Tank",
        piped: false,
        isRaw: false,
        handPicked: false,
        default: "emptyFluidTank",
        recipes: {
            emptyFluidTank: {
                name: "Empty Fluid Tank",
                machine: "constructor",
                inputs: {
                    aluminumIngot: {
                        amount: 1,
                        rate: 60
                    }
                },
                outputs: {
                    emptyFluidTank: {
                        amount: 1,
                        rate: 60
                    }
                },
                parentRecipe: "emptyFluidTank"
            },
            unpackagedNitricAcid: {
                name: "Unpackaged Nitric Acid",
                machine: "packager",
                inputs: {
                    packagedNitricAcid: {
                        amount: 1,
                        rate: 20
                    }
                },
                outputs: {
                    nitricAcid: {
                        amount: 1,
                        rate: 20
                    },
                    emptyFluidTank: {
                        amount: 1,
                        rate: 20
                    }
                },
                parentRecipe: "emptyFluidTank"
            },
            unpackagedNitrogenGas: {
                name: "Unpackaged Nitrogen Gas",
                machine: "packager",
                inputs: {
                    packagedNitrogenGas: {
                        amount: 1,
                        rate: 60
                    }
                },
                outputs: {
                    nitrogenGas: {
                        amount: 4,
                        rate: 240
                    },
                    emptyFluidTank: {
                        amount: 1,
                        rate: 60
                    }
                },
                parentRecipe: "emptyFluidTank"
            }
        }
    },
    pressureConversionCube: {
        name: "Pressure Conversion Cube",
        piped: false,
        isRaw: false,
        handPicked: false,
        default: "pressureConversionCube",
        recipes: {
            pressureConversionCube: {
                name: "Pressure Conversion Cube",
                machine: "assembler",
                inputs: {
                    fusedModularFrame: {
                        amount: 1,
                        rate: 1
                    },
                    radioControlUnit: {
                        amount: 2,
                        rate: 2
                    }
                },
                outputs: {
                    pressureConversionCube: {
                        amount: 1,
                        rate: 1
                    }
                },
                parentRecipe: "pressureConversionCube"
            }
        }
    },
    packagedWater: {
        name: "Packaged Water",
        piped: false,
        isRaw: false,
        handPicked: false,
        default: "packagedWater",
        recipes: {
            packagedWater: {
                name: "Packaged Water",
                machine: "packager",
                inputs: {
                    water: {
                        amount: 2,
                        rate: 60
                    },
                    emptyCanister: {
                        amount: 2,
                        rate: 60
                    }
                },
                outputs: {
                    packagedWater: {
                        amount: 2,
                        rate: 60
                    }
                },
                parentRecipe: "packagedWater"
            }
        }
    },
    packagedAluminaSolution: {
        name: "Packaged Alumina Solution",
        piped: false,
        isRaw: false,
        handPicked: false,
        default: "packagedAluminaSolution",
        recipes: {
            packagedAluminaSolution: {
                name: "Packaged Alumina Solution",
                machine: "packager",
                inputs: {
                    aluminaSolution: {
                        amount: 2,
                        rate: 120
                    },
                    emptyCanister: {
                        amount: 2,
                        rate: 120
                    }
                },
                outputs: {
                    packagedAluminaSolution: {
                        amount: 2,
                        rate: 120
                    }
                },
                parentRecipe: "packagedAluminaSolution"
            }
        }
    },
    packagedSulfuricAcid: {
        name: "Packaged Sulfuric Acid",
        piped: false,
        isRaw: false,
        handPicked: false,
        default: "packagedSulfuricAcid",
        recipes: {
            packagedSulfuricAcid: {
                name: "Packaged Sulfuric Acid",
                machine: "packager",
                inputs: {
                    sulfuricAcid: {
                        amount: 2,
                        rate: 40
                    },
                    emptyCanister: {
                        amount: 2,
                        rate: 40
                    }
                },
                outputs: {
                    packagedSulfuricAcid: {
                        amount: 2,
                        rate: 40
                    }
                },
                parentRecipe: "packagedSulfuricAcid"
            }
        }
    },
    packagedNitricAcid: {
        name: "Packaged Nitric Acid",
        piped: false,
        isRaw: false,
        handPicked: false,
        default: "packagedNitricAcid",
        recipes: {
            packagedNitricAcid: {
                name: "Packaged Nitric Acid",
                machine: "packager",
                inputs: {
                    nitricAcid: {
                        amount: 1,
                        rate: 30
                    },
                    emptyFluidTank: {
                        amount: 1,
                        rate: 30
                    }
                },
                outputs: {
                    packagedNitricAcid: {
                        amount: 1,
                        rate: 30
                    }
                },
                parentRecipe: "packagedNitricAcid"
            }
        }
    },
    packagedNitrogenGas: {
        name: "Packaged Nitrogen Gas",
        piped: false,
        isRaw: false,
        handPicked: false,
        default: "packagedNitrogenGas",
        recipes: {
            packagedNitrogenGas: {
                name: "Packaged Nitrogen Gas",
                machine: "packager",
                inputs: {
                    nitrogenGas: {
                        amount: 4,
                        rate: 240
                    },
                    emptyFluidTank: {
                        amount: 1,
                        rate: 60
                    }
                },
                outputs: {
                    packagedNitrogenGas: {
                        amount: 1,
                        rate: 60
                    }
                },
                parentRecipe: "packagedNitrogenGas"
            }
        }
    },
    compactedCoal: {
        name: "Compacted Coal",
        piped: false,
        isRaw: false,
        handPicked: false,
        default: "compactedCoal",
        recipes: {
            compactedCoal: {
                name: "Alternate: Compacted Coal",
                machine: "assembler",
                inputs: {
                    coal: {
                        amount: 5,
                        rate: 25
                    },
                    sulfur: {
                        amount: 5,
                        rate: 25
                    }
                },
                outputs: {
                    compactedCoal: {
                        amount: 5,
                        rate: 25
                    }
                },
                parentRecipe: "compactedCoal"
            }
        }
    },
    packagedOil: {
        name: "Packaged Oil",
        piped: false,
        isRaw: false,
        handPicked: false,
        default: "packagedOil",
        recipes: {
            packagedOil: {
                name: "Packaged Oil",
                machine: "packager",
                inputs: {
                    crudeOil: {
                        amount: 2,
                        rate: 30
                    },
                    emptyCanister: {
                        amount: 2,
                        rate: 30
                    }
                },
                outputs: {
                    packagedOil: {
                        amount: 2,
                        rate: 30
                    }
                },
                parentRecipe: "packagedOil"
            }
        }
    },
    packagedHeavyOilResidue: {
        name: "Packaged Heavy Oil Residue",
        piped: false,
        isRaw: false,
        handPicked: false,
        default: "packagedHeavyOilResidue",
        recipes: {
            packagedHeavyOilResidue: {
                name: "Packaged Heavy Oil Residue",
                machine: "packager",
                inputs: {
                    heavyOilResidue: {
                        amount: 2,
                        rate: 30
                    },
                    emptyCanister: {
                        amount: 2,
                        rate: 30
                    }
                },
                outputs: {
                    packagedHeavyOilResidue: {
                        amount: 2,
                        rate: 30
                    }
                },
                parentRecipe: "packagedHeavyOilResidue"
            }
        }
    },
    packagedFuel: {
        name: "Packaged Fuel",
        piped: false,
        isRaw: false,
        handPicked: false,
        default: "packagedFuel",
        recipes: {
            packagedFuel: {
                name: "Packaged Fuel",
                machine: "packager",
                inputs: {
                    fuel: {
                        amount: 2,
                        rate: 40
                    },
                    emptyCanister: {
                        amount: 2,
                        rate: 40
                    }
                },
                outputs: {
                    packagedFuel: {
                        amount: 2,
                        rate: 40
                    }
                },
                parentRecipe: "packagedFuel"
            },
            altDilutedPackagedFuel: {
                name: "Alternate: Diluted Packaged Fuel",
                machine: "refinery",
                inputs: {
                    heavyOilResidue: {
                        amount: 1,
                        rate: 30
                    },
                    packagedWater: {
                        amount: 2,
                        rate: 60
                    }
                },
                outputs: {
                    packagedFuel: {
                        amount: 2,
                        rate: 60
                    }
                },
                parentRecipe: "packagedFuel"
            }
        }
    },
    packagedLiquidBiofuel: {
        name: "Packaged Liquid Biofuel",
        piped: false,
        isRaw: false,
        handPicked: false,
        default: "packagedLiquidBiofuel",
        recipes: {
            packagedLiquidBiofuel: {
                name: "Packaged Liquid Biofuel",
                machine: "packager",
                inputs: {
                    liquidBiofuel: {
                        amount: 2,
                        rate: 40
                    },
                    emptyCanister: {
                        amount: 2,
                        rate: 40
                    }
                },
                outputs: {
                    packagedLiquidBiofuel: {
                        amount: 2,
                        rate: 40
                    }
                },
                parentRecipe: "packagedLiquidBiofuel"
            }
        }
    },
    packagedTurbofuel: {
        name: "Packaged Turbofuel",
        piped: false,
        isRaw: false,
        handPicked: false,
        default: "packagedTurbofuel",
        recipes: {
            packagedTurbofuel: {
                name: "Packaged Turbofuel",
                machine: "packager",
                inputs: {
                    turbofuel: {
                        amount: 2,
                        rate: 20
                    },
                    emptyCanister: {
                        amount: 2,
                        rate: 20
                    }
                },
                outputs: {
                    packagedTurbofuel: {
                        amount: 2,
                        rate: 20
                    }
                },
                parentRecipe: "packagedTurbofuel"
            }
        }
    },
    solidBiofuel: {
        name: "Solid Biofuel",
        piped: false,
        isRaw: false,
        handPicked: false,
        default: "solidBiofuel",
        recipes: {
            solidBiofuel: {
                name: "Solid Biofuel",
                machine: "constructor",
                inputs: {
                    biomass: {
                        amount: 8,
                        rate: 120
                    }
                },
                outputs: {
                    solidBiofuel: {
                        amount: 4,
                        rate: 60
                    }
                },
                parentRecipe: "solidBiofuel"
            }
        }
    },
    biomass: {
        name: "Biomass",
        piped: false,
        isRaw: false,
        handPicked: false,
        default: "biomassLeaves",
        recipes: {
            biomassAlienProtein: {
                name: "Biomass (Alien Protein)",
                machine: "constructor",
                inputs: {
                    alienProtein: {
                        amount: 1,
                        rate: 15
                    }
                },
                outputs: {
                    biomass: {
                        amount: 100,
                        rate: 1500
                    }
                },
                parentRecipe: "biomass"
            },
            biomassLeaves: {
                name: "Biomass (Leaves)",
                machine: "constructor",
                inputs: {
                    leaves: {
                        amount: 10,
                        rate: 120
                    }
                },
                outputs: {
                    biomass: {
                        amount: 5,
                        rate: 60
                    }
                },
                parentRecipe: "biomass"
            },
            biomassMycelia: {
                name: "Biomass (Mycelia)",
                machine: "constructor",
                inputs: {
                    mycelia: {
                        amount: 1,
                        rate: 15
                    }
                },
                outputs: {
                    biomass: {
                        amount: 10,
                        rate: 150
                    }
                },
                parentRecipe: "biomass"
            },
            biomassWood: {
                name: "Biomass (Wood)",
                machine: "constructor",
                inputs: {
                    wood: {
                        amount: 4,
                        rate: 60
                    }
                },
                outputs: {
                    biomass: {
                        amount: 20,
                        rate: 300
                    }
                },
                parentRecipe: "biomass"
            }
        }
    },
    uraniumFuelRod: {
        name: "Uranium Fuel Rod",
        piped: false,
        isRaw: false,
        handPicked: false,
        default: "uraniumFuelRod",
        recipes: {
            uraniumFuelRod: {
                name: "Uranium Fuel Rod",
                machine: "manufacturer",
                inputs: {
                    encasedUraniumCell: {
                        amount: 50,
                        rate: 20
                    },
                    encasedIndustrialBeam: {
                        amount: 3,
                        rate: 1.2
                    },
                    electromagneticControlRod: {
                        amount: 5,
                        rate: 2
                    }
                },
                outputs: {
                    uraniumFuelRod: {
                        amount: 1,
                        rate: 0.4
                    }
                },
                parentRecipe: "uraniumFuelRod"
            },
            altUraniumFuelUnit: {
                name: "Alternative: Uranium Fuel Unit",
                machine: "manufacturer",
                inputs: {
                    encasedUraniumCell: {
                        amount: 100,
                        rate: 20
                    },
                    electromagneticControlRod: {
                        amount: 10,
                        rate: 2
                    },
                    crystalOscillator: {
                        amount: 3,
                        rate: 0.6
                    },
                    beacon: {
                        amount: 6,
                        rate: 1.2
                    }
                },
                outputs: {
                    uraniumFuelRod: {
                        amount: 3,
                        rate: 0.6
                    }
                },
                parentRecipe: "uraniumFuelRod"
            }
        }
    },
    plutoniumFuelRod: {
        name: "Plutonium Fuel Rod",
        piped: false,
        isRaw: false,
        handPicked: false,
        default: "plutoniumFuelRod",
        recipes: {
            plutoniumFuelRod: {
                name: "Plutonium Fuel Rod",
                machine: "manufacturer",
                inputs: {
                    encasedPlutoniumCell: {
                        amount: 30,
                        rate: 7.5
                    },
                    steelBeam: {
                        amount: 18,
                        rate: 4.5
                    },
                    electromagneticControlRod: {
                        amount: 6,
                        rate: 1.5
                    },
                    heatSink: {
                        amount: 10,
                        rate: 2.5
                    }
                },
                outputs: {
                    plutoniumFuelRod: {
                        amount: 1,
                        rate: 0.25
                    }
                },
                parentRecipe: "plutoniumFuelRod"
            },
            altPlutoniumFuelUnit: {
                name: "Alternative: Plutonium Fuel Unit",
                machine: "assembler",
                inputs: {
                    encasedPlutoniumCell: {
                        amount: 20,
                        rate: 10
                    },
                    pressureConversionCube: {
                        amount: 1,
                        rate: 0.5
                    }
                },
                outputs: {
                    plutoniumFuelRod: {
                        amount: 1,
                        rate: 0.5
                    }
                },
                parentRecipe: "plutoniumFuelRod"
            }
        }
    },
    blackPowder: {
        name: "Black Powder",
        piped: false,
        isRaw: false,
        handPicked: false,
        default: "blackPowder",
        recipes: {
            blackPowder: {
                name: "Black Powder",
                machine: "assembler",
                inputs: {
                    coal: {
                        amount: 1,
                        rate: 15
                    },
                    sulfur: {
                        amount: 1,
                        rate: 15
                    }
                },
                outputs: {
                    blackPowder: {
                        amount: 2,
                        rate: 30
                    }
                },
                parentRecipe: "blackPowder"
            },
            altFineBlackPowder: {
                name: "Alternate: Fine Black Powder",
                machine: "assembler",
                inputs: {
                    compactedCoal: {
                        amount: 1,
                        rate: 3.75
                    },
                    sulfur: {
                        amount: 2,
                        rate: 7.5
                    }
                },
                outputs: {
                    blackPowder: {
                        amount: 4,
                        rate: 15
                    }
                },
                parentRecipe: "blackPowder"
            }
        }
    },
    smokelessPowder: {
        name: "Smokeless Powder",
        piped: false,
        isRaw: false,
        handPicked: false,
        default: "smokelessPowder",
        recipes: {
            smokelessPowder: {
                name: "Smokeless Powder",
                machine: "refinery",
                inputs: {
                    blackPowder: {
                        amount: 2,
                        rate: 20
                    },
                    heavyOilResidue: {
                        amount: 1,
                        rate: 10
                    }
                },
                outputs: {
                    smokelessPowder: {
                        amount: 2,
                        rate: 20
                    }
                },
                parentRecipe: "smokelessPowder"
            }
        }
    },
    gasFilter: {
        name: "Gas Filter",
        piped: false,
        isRaw: false,
        handPicked: false,
        default: "gasFilter",
        recipes: {
            gasFilter: {
                name: "Gas Filter",
                machine: "manufacturer",
                inputs: {
                    coal: {
                        amount: 5,
                        rate: 37.5
                    },
                    rubber: {
                        amount: 2,
                        rate: 15
                    },
                    fabric: {
                        amount: 2,
                        rate: 15
                    }
                },
                outputs: {
                    gasFilter: {
                        amount: 1,
                        rate: 7.5
                    }
                },
                parentRecipe: "gasFilter"
            }
        }
    },
    colorCartridge: {
        name: "Color Cartridge",
        piped: false,
        isRaw: false,
        handPicked: false,
        default: "colorCartridge",
        recipes: {
            colorCartridge: {
                name: "Color Cartridge",
                machine: "constructor",
                inputs: {
                    flowerPetals: {
                        amount: 5,
                        rate: 50
                    }
                },
                outputs: {
                    colorCartridge: {
                        amount: 10,
                        rate: 100
                    }
                },
                parentRecipe: "colorCartridge"
            }
        }
    },
    beacon: {
        name: "Beacon",
        piped: false,
        isRaw: false,
        handPicked: false,
        default: "beacon",
        recipes: {
            beacon: {
                name: "Beacon",
                machine: "manufacturer",
                inputs: {
                    ironPlate: {
                        amount: 3,
                        rate: 22.5
                    },
                    ironRod: {
                        amount: 1,
                        rate: 7.5
                    },
                    wire: {
                        amount: 15,
                        rate: 112.5
                    },
                    cable: {
                        amount: 2,
                        rate: 15
                    }
                },
                outputs: {
                    beacon: {
                        amount: 1,
                        rate: 7.5
                    }
                },
                parentRecipe: "beacon"
            },
            altCrystalBeacon: {
                name: "Alternative: Crystal Beacon",
                machine: "manufacturer",
                inputs: {
                    steelBeam: {
                        amount: 4,
                        rate: 2
                    },
                    steelPipe: {
                        amount: 16,
                        rate: 8
                    },
                    crystalOscillator: {
                        amount: 1,
                        rate: 0.5
                    }
                },
                outputs: {
                    beacon: {
                        amount: 20,
                        rate: 10
                    }
                },
                parentRecipe: "beacon"
            }
        }
    },
    iodineInfusedFilter: {
        name: "Ionide Infused Filter",
        piped: false,
        isRaw: false,
        handPicked: false,
        default: "iodineInfusedFilter",
        recipes: {
            iodineInfusedFilter: {
                name: "Ionide Infused Filter",
                machine: "manufacturer",
                inputs: {
                    gasFilter: {
                        amount: 1,
                        rate: 3.75
                    },
                    quickwire: {
                        amount: 8,
                        rate: 30
                    },
                    aluminumCasing: {
                        amount: 1,
                        rate: 3.75
                    }
                },
                outputs: {
                    iodineInfusedFilter: {
                        amount: 1,
                        rate: 3.75
                    }
                },
                parentRecipe: "iodineInfusedFilter"
            }
        }
    },
    electromagneticControlRod: {
        name: "Electromagnetic Control Rod",
        piped: false,
        isRaw: false,
        handPicked: false,
        default: "electromagneticControlRod",
        recipes: {
            electromagneticControlRod: {
                name: "Electromagnetic Control Rod",
                machine: "assembler",
                inputs: {
                    stator: {
                        amount: 3,
                        rate: 6
                    },
                    aiLimiter: {
                        amount: 2,
                        rate: 4
                    }
                },
                outputs: {
                    electromagneticControlRod: {
                        amount: 2,
                        rate: 4
                    }
                },
                parentRecipe: "electromagneticControlRod"
            },
            altElectromagneticConnectionRod: {
                name: "Alternative: Electromagnetic Connection Rod",
                machine: "assembler",
                inputs: {
                    stator: {
                        amount: 2,
                        rate: 8
                    },
                    highSpeedConnector: {
                        amount: 1,
                        rate: 4
                    }
                },
                outputs: {
                    electromagneticControlRod: {
                        amount: 2,
                        rate: 8
                    }
                },
                parentRecipe: "electromagneticControlRod"
            }
        }
    },
    encasedUraniumCell: {
        name: "Encased Uranium Cell",
        piped: false,
        isRaw: false,
        handPicked: false,
        default: "encasedUraniumCell",
        recipes: {
            encasedUraniumCell: {
                name: "Encased Uranium Cell",
                machine: "blender",
                inputs: {
                    uranium: {
                        amount: 10,
                        rate: 50
                    },
                    concrete: {
                        amount: 3,
                        rate: 15
                    },
                    sulfuricAcid: {
                        amount: 8,
                        rate: 40
                    }
                },
                outputs: {
                    encasedUraniumCell: {
                        amount: 5,
                        rate: 25
                    },
                    sulfuricAcid: {
                        amount: 2,
                        rate: 10
                    }
                },
                parentRecipe: "encasedUraniumCell"
            },
            altInfusedUraniumCell: {
                name: "Alternate: Infused Uranium Cell",
                machine: "manufacturer",
                inputs: {
                    uranium: {
                        amount: 5,
                        rate: 25
                    },
                    silica: {
                        amount: 3,
                        rate: 15
                    },
                    sulfur: {
                        amount: 5,
                        rate: 25
                    },
                    quickwire: {
                        amount: 15,
                        rate: 75
                    }
                },
                outputs: {
                    encasedUraniumCell: {
                        amount: 4,
                        rate: 20
                    }
                },
                parentRecipe: "encasedUraniumCell"
            }
        }
    },
    nonfissileUranium: {
        name: "Non-fissile Uranium",
        piped: false,
        isRaw: false,
        handPicked: false,
        default: "nonfissileUranium",
        recipes: {
            nonfissileUranium: {
                name: "Non-fissile Uranium",
                machine: "blender",
                inputs: {
                    uraniumWaste: {
                        amount: 15,
                        rate: 37.5
                    },
                    silica: {
                        amount: 10,
                        rate: 25
                    },
                    sulfuricAcid: {
                        amount: 6,
                        rate: 15
                    },
                    nitricAcid: {
                        amount: 6,
                        rate: 15
                    }
                },
                outputs: {
                    nonfissileUranium: {
                        amount: 20,
                        rate: 50
                    },
                    water: {
                        amount: 6,
                        rate: 15
                    }
                },
                parentRecipe: "nonfissileUranium"
            },
            altFertileUranium: {
                name: "Alternate: Fertile Uranium",
                machine: "blender",
                inputs: {
                    uranium: {
                        amount: 5,
                        rate: 25
                    },
                    uraniumWaste: {
                        amount: 5,
                        rate: 25
                    },
                    sulfuricAcid: {
                        amount: 5,
                        rate: 25
                    },
                    nitricAcid: {
                        amount: 3,
                        rate: 15
                    }
                },
                outputs: {
                    nonfissileUranium: {
                        amount: 20,
                        rate: 100
                    },
                    water: {
                        amount: 8,
                        rate: 40
                    }
                },
                parentRecipe: "nonfissileUranium"
            }
        }
    },
    plutoniumPellet: {
        name: "Plutonium Pellet",
        piped: false,
        isRaw: false,
        handPicked: false,
        default: "plutoniumPellet",
        recipes: {
            plutoniumPellet: {
                name: "Plutonium Pellet",
                machine: "particleAccelerator",
                inputs: {
                    nonfissileUranium: {
                        amount: 100,
                        rate: 100
                    },
                    uraniumWaste: {
                        amount: 25,
                        rate: 25
                    }
                },
                outputs: {
                    plutoniumPellet: {
                        amount: 30,
                        rate: 30
                    }
                },
                parentRecipe: "plutoniumPellet"
            }
        }
    },
    encasedPlutoniumCell: {
        name: "Encased Plutonium Cell",
        piped: false,
        isRaw: false,
        handPicked: false,
        default: "encasedPlutoniumCell",
        recipes: {
            encasedPlutoniumCell: {
                name: "Encased Plutonium Cell",
                machine: "assembler",
                inputs: {
                    plutoniumPellet: {
                        amount: 2,
                        rate: 10
                    },
                    concrete: {
                        amount: 4,
                        rate: 20
                    }
                },
                outputs: {
                    encasedPlutoniumCell: {
                        amount: 5,
                        rate: 25
                    }
                },
                parentRecipe: "encasedPlutoniumCell"
            },
            altInstantPlutoniumCell: {
                name: "Alternate: Instant Plutonium Cell",
                machine: "particleAccelerator",
                inputs: {
                    nonfissileUranium: {
                        amount: 150,
                        rate: 75
                    },
                    aluminumCasing: {
                        amount: 20,
                        rate: 10
                    }
                },
                outputs: {
                    encasedPlutoniumCell: {
                        amount: 20,
                        rate: 10
                    }
                },
                parentRecipe: "encasedPlutoniumCell"
            }
        }
    },
    uraniumWaste: {
        name: "Uranium Waste",
        piped: false,
        isRaw: false,
        handPicked: false,
        default: "uraniumWaste",
        recipes: {
            uraniumWaste: {
                name: "Uranium Waste",
                machine: "nuclearPowerPlant",
                inputs: {
                    uraniumFuelRod: {
                        amount: 1,
                        rate: 0.2
                    }
                },
                outputs: {
                    uraniumWaste: {
                        amount: 50,
                        rate: 10
                    }
                },
                parentRecipe: "uraniumWaste"
            }
        }
    },
    plutoniumWaste: {
        name: "Plutonium Waste",
        piped: false,
        isRaw: false,
        handPicked: false,
        default: "plutoniumWaste",
        recipes: {
            plutoniumWaste: {
                name: "Plutonium Waste",
                machine: "nuclearPowerPlant",
                inputs: {
                    plutoniumFuelRod: {
                        amount: 1,
                        rate: 0.1
                    }
                },
                outputs: {
                    plutoniumWaste: {
                        amount: 10,
                        rate: 1
                    }
                },
                parentRecipe: "plutoniumWaste"
            }
        }
    },
    smartPlating: {
        name: "Smart Plating",
        piped: false,
        isRaw: false,
        handPicked: false,
        default: "smartPlating",
        recipes: {
            smartPlating: {
                name: "Smart Plating",
                machine: "assembler",
                inputs: {
                    reinforcedIronPlate: {
                        amount: 1,
                        rate: 2
                    },
                    rotor: {
                        amount: 1,
                        rate: 2
                    }
                },
                outputs: {
                    smartPlating: {
                        amount: 1,
                        rate: 2
                    }
                },
                parentRecipe: "smartPlating"
            },
            altPlasticSmartPlating: {
                name: "Alternate: Plastic Smart Plating",
                machine: "manufacturer",
                inputs: {
                    reinforcedIronPlate: {
                        amount: 1,
                        rate: 2.5
                    },
                    rotor: {
                        amount: 1,
                        rate: 2.5
                    },
                    plastic: {
                        amount: 3,
                        rate: 7.5
                    }
                },
                outputs: {
                    smartPlating: {
                        amount: 2,
                        rate: 5
                    }
                },
                parentRecipe: "smartPlating"
            }
        }
    },
    versatileFramework: {
        name: "Versatile Framework",
        piped: false,
        isRaw: false,
        handPicked: false,
        default: "versatileFramework",
        recipes: {
            versatileFramework: {
                name: "Versatile Framework",
                machine: "assembler",
                inputs: {
                    modularFrame: {
                        amount: 1,
                        rate: 2.5
                    },
                    steelBeam: {
                        amount: 12,
                        rate: 30
                    }
                },
                outputs: {
                    versatileFramework: {
                        amount: 2,
                        rate: 5
                    }
                },
                parentRecipe: "versatileFramework"
            },
            altFlexibleFramework: {
                name: "Alternate: Flexible Framework",
                machine: "manufacturer",
                inputs: {
                    modularFrame: {
                        amount: 1,
                        rate: 3.75
                    },
                    steelBeam: {
                        amount: 6,
                        rate: 22.5
                    },
                    rubber: {
                        amount: 8,
                        rate: 30
                    }
                },
                outputs: {
                    versatileFramework: {
                        amount: 2,
                        rate: 7.5
                    }
                },
                parentRecipe: "versatileFramework"
            }
        }
    },
    automatedWiring: {
        name: "Automated Wiring",
        piped: false,
        isRaw: false,
        handPicked: false,
        default: "automatedWiring",
        recipes: {
            automatedWiring: {
                name: "Automated Wiring",
                machine: "assembler",
                inputs: {
                    stator: {
                        amount: 1,
                        rate: 2.5
                    },
                    cable: {
                        amount: 20,
                        rate: 50
                    }
                },
                outputs: {
                    automatedWiring: {
                        amount: 1,
                        rate: 2.5
                    }
                },
                parentRecipe: "automatedWiring"
            },
            altAutomatedSpeedWiring: {
                name: "Alternate: Automated Speed Wiring",
                machine: "manufacturer",
                inputs: {
                    stator: {
                        amount: 2,
                        rate: 3.75
                    },
                    wire: {
                        amount: 40,
                        rate: 75
                    },
                    highSpeedConnector: {
                        amount: 1,
                        rate: 1.88
                    }
                },
                outputs: {
                    automatedWiring: {
                        amount: 4,
                        rate: 7.5
                    }
                },
                parentRecipe: "automatedWiring"
            }
        }
    },
    modularEngine: {
        name: "Modular Engine",
        piped: false,
        isRaw: false,
        handPicked: false,
        default: "modularEngine",
        recipes: {
            modularEngine: {
                name: "Modular Engine",
                machine: "manufacturer",
                inputs: {
                    motor: {
                        amount: 2,
                        rate: 2
                    },
                    rubber: {
                        amount: 15,
                        rate: 15
                    },
                    smartPlating: {
                        amount: 2,
                        rate: 2
                    }
                },
                outputs: {
                    modularEngine: {
                        amount: 1,
                        rate: 1
                    }
                },
                parentRecipe: "modularEngine"
            }
        }
    },
    adaptiveControlUnit: {
        name: "Adaptive Control Unit",
        piped: false,
        isRaw: false,
        handPicked: false,
        default: "adaptiveControlUnit",
        recipes: {
            adaptiveControlUnit: {
                name: "Adaptive Control Unit",
                machine: "manufacturer",
                inputs: {
                    automatedWiring: {
                        amount: 15,
                        rate: 7.5
                    },
                    circuitBoard: {
                        amount: 10,
                        rate: 5
                    },
                    heavyModularFrame: {
                        amount: 2,
                        rate: 1
                    },
                    computer: {
                        amount: 2,
                        rate: 1
                    }
                },
                outputs: {
                    adaptiveControlUnit: {
                        amount: 2,
                        rate: 1
                    }
                },
                parentRecipe: "adaptiveControlUnit"
            }
        }
    },
    assemblyDirectorSystem: {
        name: "Assembly Director System",
        piped: false,
        isRaw: false,
        handPicked: false,
        default: "assemblyDirectorSystem",
        recipes: {
            assemblyDirectorSystem: {
                name: "Assembly Director System",
                machine: "assembler",
                inputs: {
                    adaptiveControlUnit: {
                        amount: 2,
                        rate: 1.5
                    },
                    supercomputer: {
                        amount: 1,
                        rate: 0.75
                    }
                },
                outputs: {
                    assemblyDirectorSystem: {
                        amount: 1,
                        rate: 0.75
                    }
                },
                parentRecipe: "assemblyDirectorSystem"
            }
        }
    },
    magneticFieldGenerator: {
        name: "Magnetic Field Generator",
        piped: false,
        isRaw: false,
        handPicked: false,
        default: "magneticFieldGenerator",
        recipes: {
            magneticFieldGenerator: {
                name: "Magnetic Field Generator",
                machine: "manufacturer",
                inputs: {
                    versatileFramework: {
                        amount: 5,
                        rate: 2.5
                    },
                    electromagneticControlRod: {
                        amount: 2,
                        rate: 1
                    },
                    battery: {
                        amount: 10,
                        rate: 5
                    }
                },
                outputs: {
                    magneticFieldGenerator: {
                        amount: 2,
                        rate: 1
                    }
                },
                parentRecipe: "magneticFieldGenerator"
            }
        }
    },
    thermalPropulsionRocket: {
        name: "Thermal Propulsion Rocket",
        piped: false,
        isRaw: false,
        handPicked: false,
        default: "thermalPropulsionRocket",
        recipes: {
            thermalPropulsionRocket: {
                name: "Thermal Propulsion Rocket",
                machine: "manufacturer",
                inputs: {
                    modularEngine: {
                        amount: 5,
                        rate: 2.5
                    },
                    turboMotor: {
                        amount: 2,
                        rate: 1
                    },
                    coolingSystem: {
                        amount: 6,
                        rate: 3
                    },
                    fusedModularFrame: {
                        amount: 2,
                        rate: 1
                    }
                },
                outputs: {
                    thermalPropulsionRocket: {
                        amount: 2,
                        rate: 1
                    }
                },
                parentRecipe: "thermalPropulsionRocket"
            }
        }
    },
    nuclearPasta: {
        name: "Nuclear Pasta",
        piped: false,
        isRaw: false,
        handPicked: false,
        default: "nuclearPasta",
        recipes: {
            nuclearPasta: {
                name: "Nuclear Pasta",
                machine: "particleAccelerator",
                inputs: {
                    copperPowder: {
                        amount: 200,
                        rate: 100
                    },
                    pressureConversionCube: {
                        amount: 1,
                        rate: 0.5
                    }
                },
                outputs: {
                    nuclearPasta: {
                        amount: 1,
                        rate: 0.5
                    }
                },
                parentRecipe: "nuclearPasta"
            }
        }
    }
};

