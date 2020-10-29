let SpellOff = game.macros.getName("SpellOff");
async function choose(options = [], prompt = ``) {
    let value = await new Promise((resolve, reject) => {

        let dialog_options = (options[0] instanceof Array)
            ? options.map(o => `<option value="${o[0]}">${o[1]}</option>`).join(``)
            : options.map(o => `<option value="${o}">${o}</option>`).join(``);

        let content = `${prompt}<br><select id="choice">${dialog_options}</select>`;

        new Dialog({
            content,
            buttons: { OK: { label: `OK`, callback: async (html) => { resolve(html.find('#choice').val()); } } }
        }).render(true);
    });
    return value;
}

(async () => {
    let choice = await choose(Object.keys(actor.data.flags.world), `Choose something : `);
    if (choice === "barkskin") {
        SpellOff.execute("Barkskin")
    }
    if (choice === "DE Blinded" || "DE Deafened") {
        SpellOff.execute("BlindDeaf")
    } 
    if (choice === "darkvisionSpell") {
        SpellOff.execute("Darkvision")
    } 
    if (choice === "elementalWeapon") {
        SpellOff.execute("Darkvision")
    } 
    if (choice === "enhanceAbility") {
        SpellOff.execute("Enhance Ability")
    } 
    if (choice === "EyebiteSpell") {
        SpellOff.execute("Eyebite")
    } 
    if (choice === "FireShield") {
        SpellOff.execute("FireShield")
    } 
    if (choice === "Haste") {
        SpellOff.execute("HasteSpell")
    } 
    if (choice === "HeroesFeast") {
        SpellOff.execute("HeroesFeast")
    } 
    if (choice === "ProtectionFromEnergy") {
        SpellOff.execute("ProtectionFromEnergy")
    } 
    if (choice === "magicWeapon") {
        SpellOff.execute("Magic Weapon")
    } 
    if (choice === "banishment") {
        SpellOff.execute("Banishment")
    } 
     if (choice === "enlageReduceSpell") {
        SpellOff.execute("EnlargeReduce")
    } 
     if (choice === "heroismUpdateCombatHookId") {
        SpellOff.execute("Heroism")
    } 
     if (choice === "Longstrider") {
        SpellOff.execute("Longstrider")
    } 
     if (choice === "rayOfFrost") {
        SpellOff.execute("Ray of Frost")
    } 
     if (choice === "shillelagh") {
        SpellOff.execute("Shillelagh")
    }
    if (choice === "AlterSelfSpell") {
        SpellOff.execute("Alter Self")
    }
})();