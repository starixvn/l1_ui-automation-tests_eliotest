import { HeroesSlotLocators } from "../heroes-slot-locators";
import { HeroesSlotConfigs } from "../heroes-slot-configs";
import { SmokeBases } from "sc-automation-core";

class HeroesSlotSmokeSpec extends SmokeBases.SlotGameBase {
    /**
     *
     */
    constructor() {
        const e2eOptions: SmokeBases.IBaseOptions = {
            placeBetChoices: [HeroesSlotConfigs.choices[0]],
            gameConfiguration: HeroesSlotConfigs,
            locators: HeroesSlotLocators,
            waitBetTimeout: 1000,
            snapshotFolderPath: __filename,
        };
        super(e2eOptions);
    }

}

new HeroesSlotSmokeSpec().start();
