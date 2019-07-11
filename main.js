$(document).ready(function(){
var conList = [];
$('.total').html(conList.length+" contacts");


$("#addForm").click(function(){
clearIn();
$("#contact-list").hide();
$("#form").fadeIn(1000);
});

$("#showContacts").click(function(){
loadContacts();
$("#form").hide();
$("#contact-list").fadeIn(1000);
});

$("#saveContact").click(function(){
var fn = $('input#fName').val();
var e = $('input#email').val();
var p = $('input#pNo').val();
var w = $('select#tosave').val();
conList.push([fn, e, p, w]);
clearIn();
console.log(conList);
})


$("ul.lists").on("click", "li.lis", function(){
$(".action-buttons").fadeOut();
$(this).find(".action-buttons").fadeIn();
});

$("ul.lists").on("click", "button.btn-edit", function(){
$("#contact-list").hide();
var fn = $(this).closest('li').find('.fullName').html();
$('input#fName').val(fn);
var pNo = $(this).closest('li').find('.num').html();
$('input#pNo').val(pNo);
var e = $(this).closest('li').find('.hidden').html();
$('input#email').val(e);
//console.log(fn);
$("#form").fadeIn(1000);
});

$("ul.lists").on("click", "button.btn-del", function(){
var pNo = $(this).closest('li').find('.num').html();
conList = conList.filter(function(item){ return item[2] != pNo; });
console.log(pNo);
loadContacts();
});

function clearIn() {
$('input#fName').val("");
$('input#email').val("");
$('input#pNo').val("");
}

function loadContacts() {
$('ul.lists').html("");
conList.sort();
$.each(conList, function(i) {
var li = $('<li/>').addClass('lis').appendTo($('ul.lists'));
var span = $('<span/>').addClass('fullName').text(conList[i][0]).appendTo(li);
var br = $('<br />').appendTo(li);
var span_2 = $('<span/>').addClass('num').text(conList[i][2]).appendTo(li);
var span_3 = $('<span/>').addClass('hidden').text(conList[i][1]).appendTo(li);
var div = $('<div />').addClass('action-buttons').appendTo(li);
var c_btn = $('<button />').addClass('small').text("call").appendTo(div);
var e_btn = $('<button />').addClass('small btn-edit').text("edit").appendTo(div);
var d_btn = $('<button />').addClass('small btn-del').text("del").appendTo(div);
});
$('.total').html(conList.length+" contacts");
}
});