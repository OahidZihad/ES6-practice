const friends = [
        {name: 'Rashed', money: 12},
        {name: 'Tushar', money: 122},
        {name: 'Harun', money: 142},
        {name: 'Zihad', money: 192},
        {name: 'Jibon', money: 172},
    ];

const total = friends.reduce((sum, friend) => {
        console.log(sum, friend);
        return sum + friend.money;
    }, 
0);

console.log(total);