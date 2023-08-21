export const getButtomNavbarItems = async () => {
  const res = await fetch(
    process.env.NEXT_PUBLIC_MV_CATEGORIES_MARTIAL_PROMOTIONS ?? ''
  )
  const categories = await res.json()
  return categories
}
