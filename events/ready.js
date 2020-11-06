module.exports = async (client) => {
const activity_list = 
[ 
  [`JavaScript`, "PLAYING", "idle"],
  ["bacotan-wibu.com", "LISTENING","idle"]
  ];
try {
        setInterval(() => {
		const index = Math.floor(Math.random() * activity_list.length);
		client.user.setPresence({
            activity:  {
                            name: activity_list[index][0], 
                             type: activity_list[index][1],
         },
          status: activity_list[index][2],
    })
	}, 7000);
    } catch (e) {
        console.log(e);
   }
}

