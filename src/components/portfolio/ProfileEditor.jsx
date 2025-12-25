import React, { useState } from 'react';
import { useMutation } from '@apollo/client/react';
import { UPDATE_USER } from '../../graphql/mutations';
import { uploadFile } from '../../utils/uploadFile';

const ProfileEditor = ({ user, refetch }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [form, setForm] = useState({
    nom: '', prenom: '', email: '', adresse: '', dateNaissance: '', telephone: '', titre: '', biographie: '', image: '', cover: '', civi: ''
  });

  const [imageFile, setImageFile] = useState(null);
  const [coverFile, setCoverFile] = useState(null);
  const [civiFile, setCiviFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [coverPreview, setCoverPreview] = useState(null);
  const [civiPreview, setCiviPreview] = useState(null);

  const [updateUser, { loading: updating }] = useMutation(UPDATE_USER);

  const startEdit = () => {
    if (!user) return window.location.href = '/admin/login';
    // normalize some fields: date input requires YYYY-MM-DD and some servers may return different keys
    // provide fallbacks for possible field-name variants (telephone/tel, titre/title)
    // and ensure date is in YYYY-MM-DD so the <input type="date" /> displays it correctly
    // (keep a small debug log to help trace missing values during development)
    // eslint-disable-next-line no-console
    console.debug('ProfileEditor startEdit user:', user);
    const telephoneVal = user?.telephone ?? user?.tel ?? '';
    const titreVal = user?.titre ?? user?.title ?? '';
    let dateVal = '';
    if (user?.dateNaissance) {
      try {
        dateVal = new Date(user.dateNaissance).toISOString().slice(0, 10);
      } catch {
        // fallback: try to slice if it's a string
        if (typeof user.dateNaissance === 'string') dateVal = user.dateNaissance.slice(0, 10);
      }
    }

    setForm({
      nom: user?.nom || '',
      prenom: user?.prenom || '',
      email: user?.email || '',
      adresse: user?.adresse || '',
      dateNaissance: dateVal,
      telephone: telephoneVal,
      titre: titreVal,
      biographie: user?.biographie || '',
      image: user?.image || '',
      cover: user?.cover || '',
      civi: user?.civi || ''
    });
    setImagePreview(user?.image || null);
    setCoverPreview(user?.cover || null);
    setCiviPreview(user?.civi || null);
    setIsEditing(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let imageUrl = form.image;
      let coverUrl = form.cover;
      let civiUrl = form.civi;

      if (imageFile) imageUrl = await uploadFile(imageFile);
      if (coverFile) coverUrl = await uploadFile(coverFile);
      if (civiFile) civiUrl = await uploadFile(civiFile);

      const input = { nom: form.nom, prenom: form.prenom, email: form.email, image: imageUrl, dateNaissance: form.dateNaissance, cover: coverUrl, adresse: form.adresse, biographie: form.biographie, telephone: form.telephone, titre: form.titre, civi: civiUrl };

      await updateUser({ variables: { id: user?.id, input } });
      await refetch();
      setIsEditing(false);
      setImageFile(null); setCoverFile(null); setCiviFile(null);
      setImagePreview(null); setCoverPreview(null); setCiviPreview(null);
      alert('Profile updated successfully');
    } catch (err) {
      console.error('Update profile error', err);
      alert(err.message || 'Failed to update profile');
    }
  };

  if (!isEditing) {
    return (
      <>
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold text-[#F5B301] mb-3">About</h2>
          <div>
            <button onClick={startEdit} className="px-3 py-1 rounded bg-[#F5B301] text-[#0D0D0D] font-medium">Edit Profile</button>
          </div>
        </div>
        <p className="text-gray-300 leading-relaxed">{user?.biographie || 'No biography provided.'}</p>
      </>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input className="bg-[#0D0D0D] p-3 rounded border border-[#2A2A2A]" value={form.prenom} onChange={(e) => setForm({...form, prenom: e.target.value})} placeholder="Prenom" />
        <input className="bg-[#0D0D0D] p-3 rounded border border-[#2A2A2A]" value={form.nom} onChange={(e) => setForm({...form, nom: e.target.value})} placeholder="Nom" />
        <input className="bg-[#0D0D0D] p-3 rounded border border-[#2A2A2A]" value={form.email} onChange={(e) => setForm({...form, email: e.target.value})} placeholder="Email" />
        <input className="bg-[#0D0D0D] p-3 rounded border border-[#2A2A2A]" value={form.telephone} onChange={(e) => setForm({...form, telephone: e.target.value})} placeholder="Telephone" />
        <input className="bg-[#0D0D0D] p-3 rounded border border-[#2A2A2A]" value={form.adresse} onChange={(e) => setForm({...form, adresse: e.target.value})} placeholder="Adresse" />
        <input className="bg-[#0D0D0D] p-3 rounded border border-[#2A2A2A]" value={form.titre} onChange={(e) => setForm({...form, titre: e.target.value})} placeholder="Titre" />
        <input type="date" className="bg-[#0D0D0D] p-3 rounded border border-[#2A2A2A]" value={form.dateNaissance} onChange={(e) => setForm({...form, dateNaissance: e.target.value})} />
      </div>

      <textarea className="w-full bg-[#0D0D0D] p-3 rounded border border-[#2A2A2A]" rows={4} value={form.biographie} onChange={(e) => setForm({...form, biographie: e.target.value})} placeholder="Biographie" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm text-[#F5B301] mb-2">Avatar</label>
          <input type="file" accept="image/*" onChange={(e) => { const f = e.target.files?.[0]; setImageFile(f||null); setImagePreview(f ? URL.createObjectURL(f) : null); }} />
          {imagePreview && <img src={imagePreview} alt="preview" className="mt-2 w-28 h-28 object-cover rounded-full border-2 border-[#F5B301]" />}
        </div>

        <div>
          <label className="block text-sm text-[#F5B301] mb-2">Cover</label>
          <input type="file" accept="image/*" onChange={(e) => { const f = e.target.files?.[0]; setCoverFile(f||null); setCoverPreview(f ? URL.createObjectURL(f) : null); }} />
          {coverPreview && <img src={coverPreview} alt="cover-preview" className="mt-2 w-full h-24 object-cover rounded border-2 border-[#2A2A2A]" />}
        </div>
      </div>

      <div className="mt-4">
        <label className="block text-sm text-[#F5B301] mb-2">Civi (document)</label>
        <input type="file" accept="image/*,.pdf" onChange={(e) => { const f = e.target.files?.[0]; setCiviFile(f||null); setCiviPreview(f ? URL.createObjectURL(f) : null); }} />
        {civiPreview && (
          <div className="mt-2">
            {civiPreview.endsWith('.pdf') ? (
              <a href={civiPreview} target="_blank" rel="noreferrer" className="text-sm text-gray-300 underline">View document</a>
            ) : (
              <img src={civiPreview} alt="civi-preview" className="w-32 h-20 object-cover rounded border-2 border-[#2A2A2A]" />
            )}
          </div>
        )}
      </div>

      <div className="flex items-center gap-3 justify-end">
        <button type="button" onClick={() => setIsEditing(false)} className="px-4 py-2 rounded bg-gray-700">Cancel</button>
        <button type="submit" disabled={updating} className="px-4 py-2 rounded bg-[#F5B301] text-[#0D0D0D] font-medium">{updating ? 'Saving...' : 'Save Changes'}</button>
      </div>
    </form>
  );
};

export default ProfileEditor;
