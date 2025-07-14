/**
 * Muestra u oculta el overlay del chat
 */
function toggleChat(event) {
  if (event) event.preventDefault();
  document.getElementById('chat-panel').classList.toggle('hidden');
}
