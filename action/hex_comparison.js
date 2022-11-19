

const fertilizer =
{
    // in kg/m^2/percent 
    fertilizer_ph: [-0.6, 0.7], //negative value for decrementing value type fertilizer and +ve for incrementing type
    fertilizer_nitrogen: [-0.2, 0.3],
    fertilizer_phosphorus: [-0.6, 0.7],
    fertilizer_potassium: [-0.5, 0.8],
    fertilizer_salinity: [-0.7, 0.4],
    fertilizer_calcium: [-0.5, 0.4],
    fertilizer_zinc: [-0.6, 0.7],
    fertilizer_iron: [-0.8, 0.6],
    fertilizer_manganese: [-0.7, 0.7],
    fertilizer_copper: [-0.1, 0.5],
    fertilizer_sodium: [-0.2, 0.5],
    fertilizer_sulphur: [-0.6, 0.8],

}

hex_soil_config = "AA1275DF5ACB975AE4597AAF";
hex_soil_required = "Af1279DF535B975AB4577BCF";


function compare(hex_soil_config, hex_soil_required, fertilizer) {
    const fert = {};
    let j = 0;
    const hexToDecimal = hex => parseInt(hex, 16);

    //extraction of soil values and returning suggested fertilizer object with quantity;
    for (let i = 0; i <= 22; i += 2) {
        let soilconfig = hexToDecimal(hex_soil_config.substr(i, 2));
        let soilrequired = hexToDecimal(hex_soil_required.substr(i, 2));
        let soil_diff = soilrequired - soilconfig;
        let percent_diff = soil_diff / 255 * 100;
        let fertilizer_amount;
        
        let [key, value] = Object.entries(fertilizer)[j];
        if (percent_diff < 0 && percent_diff < 15) {


            fertilizer_amount = value[0] * percent_diff;
            fert[key+"_decrementer"] = fertilizer_amount;


        }
        else if (percent_diff > 15) {
            fertilizer_amount = value[1] * percent_diff;
            fert[key+"_incrementer"] = fertilizer_amount;

        }
        console.log(i);

        j++;

    }

    return fert;
}
const fertilizer_suggestion = compare(hex_soil_config, hex_soil_required, fertilizer);
console.log(fertilizer_suggestion);
