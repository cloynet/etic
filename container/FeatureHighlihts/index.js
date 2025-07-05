import React from 'react'

function FeatureHighlights() {
  return (
    <section className="max-w-5xl mx-auto my-16 px-6 grid grid-cols-1 sm:grid-cols-3 gap-10 text-center">
      <div>
        <div className="mx-auto mb-4 w-16 h-16 flex items-center justify-center bg-green-100 rounded-full text-green-600 text-3xl">🚚</div>
        <h4 className="text-xl font-semibold mb-2">Hızlı Kargo</h4>
        <p className="text-gray-600">Siparişleriniz 1-3 iş günü içinde kapınızda.</p>
      </div>

      <div>
        <div className="mx-auto mb-4 w-16 h-16 flex items-center justify-center bg-green-100 rounded-full text-green-600 text-3xl">💯</div>
        <h4 className="text-xl font-semibold mb-2">Orijinal Ürün Garantisi</h4>
        <p className="text-gray-600">Tüm ürünlerimiz %100 orijinaldir ve kalite kontrolünden geçer.</p>
      </div>

      <div>
        <div className="mx-auto mb-4 w-16 h-16 flex items-center justify-center bg-green-100 rounded-full text-green-600 text-3xl">📞</div>
        <h4 className="text-xl font-semibold mb-2">7/24 Destek</h4>
        <p className="text-gray-600">Her türlü sorunuz için profesyonel müşteri hizmetlerimiz yanınızda.</p>
      </div>
    </section>
  )
}

export default FeatureHighlights