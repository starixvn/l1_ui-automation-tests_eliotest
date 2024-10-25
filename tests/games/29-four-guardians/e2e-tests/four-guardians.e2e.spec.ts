import { ClassicSlotLocators } from "./four-guardians-e2e-locators";
import { FourGuardiansConfigs } from "../four-guardians-configs";
import { SmokeBases } from "sc-automation-core";

class FourGuardiansE2ESpec extends SmokeBases.SlotGameBase {
    /**
     *
     */
    constructor() {
        const e2eOptions: SmokeBases.IBaseOptions = {
            placeBetChoices: [
                FourGuardiansConfigs.choices[0],
                FourGuardiansConfigs.choices[1],
            ],
            gameConfiguration: FourGuardiansConfigs,
            locators: ClassicSlotLocators,
            waitBetTimeout: 5000,
            snapshotFolderPath: __filename,
        };
        super(e2eOptions);
    }
}

new FourGuardiansE2ESpec().start();
