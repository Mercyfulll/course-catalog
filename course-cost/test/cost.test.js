describe ("The courseCost test", function(){
    const courses = {
        "p1" : {
            courseName : "Python",
            cost : 7850.00
        },
        "p2" : {
            courseName : "Intro to PHP course",
            cost : 8990.00
        }, 
        "r1" : {
            courseName : "Ruby on Rails intro",
            cost : 5675.00
        }
    }
    
    it("It should return different prices across discount windows", function(){
        
        assert.equal(, courseCost("p2","2023-04-11"))  
        assert.equal(, courseCost("p2","2023-04-24"))  
        assert.equal(, courseCost("p1","2023-04-13"))  
        assert.equal(, courseCost("p1","2023-04-21"))
        assert.equal(, courseCost("p2","2023-04-12")) 
        assert.equal(, courseCost("p2","2023-04-20"))

    });

    it("It should return different courses has different prices", function(){
        
        assert.equal(5675, courseCost("r1", "2023-04-06")) // 
        assert.equal(7850, courseCost("p1","2023-04-06")) // 
        assert.equal(8990, courseCost("p2", "2023-04-06"))


    });

    it("It should return invalid course codes", function(){
        
        assert.equal(, courseCost("c1", "2023-04-20")) // 
        assert.equal(, courseCost("r5", "2023-04-21")) // 

    });

    it("It should return `Invalid day` if invalid date is input", function(){
        
        assert.equal(1875, courseCost("r1","october" )) // 
        assert.equal(1425, courseCost("p2", "November")) // 

    });
})