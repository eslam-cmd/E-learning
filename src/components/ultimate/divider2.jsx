import Divider from '@mui/material/Divider'; // أضف هذا الاستيراد في الأعلى

// ... داخل الكود بعد الزر وقبل قسم الشعارات:
<Button
  variant="contained"
  size="large"
  sx={{ 
    mt: 2,
    mb: 2,  // تقليل المسافة السفلية للزر
    px: 4,
    py: 1.5,
    fontSize: "1.1rem",
    fontWeight: 600
  }}
>
  Explore our Programs
</Button>

{/* الفاصل بين الزر والشعارات */}
<Divider sx={{ 
  my: 3, // مسافة 24px فوق وتحت الفاصل
  width: '80%', // عرض 80% من المساحة المتاحة
  mx: 'auto', // توسيط الأفقي
  borderColor: 'primary.main' // لون الفاصل (أزرق Material-UI افتراضي)
}} />

{/* قسم الشعارات */}
<Grid
  container
  spacing={2}
  sx={{
    justifyContent: "center",
    alignItems: "flex-start",
    mt: 2 // مسافة إضافية فوق الشعارات
  }}
></Grid>