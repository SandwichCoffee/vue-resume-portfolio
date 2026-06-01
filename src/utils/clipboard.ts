export const copyEmail = async (email: string) => {
  try {
    await navigator.clipboard.writeText(email)
    alert('이메일 주소가 복사되었습니다.')
  } catch {
    alert('복사에 실패했습니다.')
  }
}
