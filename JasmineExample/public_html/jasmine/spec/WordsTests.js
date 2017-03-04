/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

describe ("The Lannister's words", function (){
    it ("should return Hear me roar", function (){
        expect(lannisterWords()).toBe("Hear me roar");
    });
});

describe ("The Lannister's words", function (){
    it ("should not return A Lannister always pays his debts", function (){
        expect(lannisterWords()).not.toBe("A Lannister always pays his debts");
    });
});

describe ("The Targaryen's words", function (){
    it ("should say the words of Targaryans", function (){
        expect(targaryenWords()).toContain("Fire and Blood");
    });
});

describe ("The Baratheon's words", function (){
    it ("should compare the words of Baratheon", function (){
        expect(baratheonWords("Ours is the Fury")).toBeTruthy();
    });
});
