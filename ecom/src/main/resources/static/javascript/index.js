let ab=document.querySelectorAll('.categories a');
for(let i=0;i<ab.length;i++){
    ab[i].addEventListener('mouseover',function on(){
    ab[i].style.transform='scale(1.1)';
    ab[i].style.border='1px solid black';
});
};
let a=document.querySelectorAll('.categories a');
for(let i=0;i<a.length;i++){
    a[i].addEventListener('mouseout',function out(){
    a[i].style.transform='scale(1)';
    a[i].style.border='none';
});
};

let c=document.querySelectorAll('.item');
for(let i=0;i<c.length;i++){
    c[i].addEventListener('mouseover',function on(){
    c[i].style.transform='scale(1.05)';
    c[i].style.border='2px solid white';
}); 
};
let d=document.querySelectorAll('.item');
for(let i=0;i<d.length;i++){
    d[i].addEventListener('mouseout',function out(){
    d[i].style.transform='scale(1)';
    d[i].style.border='none';
});
};















