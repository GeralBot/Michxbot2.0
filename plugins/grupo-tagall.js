let handler = async(m, { isOwner, isAdmin, conn, text, participants, args, command }) => {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}
let pesan = args.join` `
let oi = `  @𝑬𝒍𝒊_𝒒.𝒓 : ${pesan}`
let teks = `𝑹𝑬𝑽𝑰𝑽𝑨𝑵 𝑴𝑨𝑵𝑪𝑶𝑺 - 𝑩𝑶𝑻 𝑴𝑰𝑺𝑯𝑰 \n\n❏ ${oi}\n\n❏  𝐄𝐭𝐢𝐪𝐮𝐞𝐭𝐚𝐬 :\n`
for (let mem of participants) {
teks +=`🩵😻🩵 @${mem.id.split('@')[0]}\n`}
teks += `➥𝑴𝑰𝑺𝑯𝑰 𝑩𝑶𝑻`
conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, )
}
handler.help = ['tagall <mesaje>','invocar <mesaje>']
handler.tags = ['group']
handler.command = /^(tagall|invocar|invocacion|todos|invocación)$/i
handler.admin = true
handler.group = true
export default handler
    