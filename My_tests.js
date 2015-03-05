TestMyCode.run("testing hello function", function(assert){
    var result = hello();
    
    assert.equals("hello world", result, "testing hello function");
});

TestMyCode.run("testing hello_uppercase function", function(assert){
    var result = hello_uppercase("onwaba");
    
    assert.equals("Hello ONWABA", result, "testing hello_uppercase function");
});

TestMyCode.run("testing number_list function", function(assert){
    var result = number_list(6);
    
    assert.equals(6, result[5], "testing number_list function");
});

TestMyCode.run("testing number_list function", function(assert){
    var result = number_list(30);
    
    assert.equals(30, result[29], "testing number_list function");
});

TestMyCode.run("testing number_list function", function(assert){
    var result = hello_joe("Joe");
    
    assert.equals("Hello", result, "testing hello_joe function");
});


TestMyCode.run("testing sum_number", function(assert){
    var result = sum_number(5);
    
    assert.equals(15, result, "testing sum_number function");
});